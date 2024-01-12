"use client";

import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-sororage";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
  persistKey: string;
} & FormConfig;

const Form = ({
  children,
  submitHandler,
  defaultValues,
  resolver,
  persistKey,
}: FormProps) => {
  const formConfig: FormConfig = {};
  const [savedValues, setSavedValues] = useState(
    !!getFromLocalStorage(persistKey)
      ? JSON.parse(getFromLocalStorage(persistKey) as string)
      : ""
  );

  if (!!savedValues) formConfig["defaultValues"] = savedValues;
  if (!!resolver) formConfig["resolver"] = resolver;
  const methods = useForm<FormProps>(formConfig);

  const { handleSubmit, reset } = methods;

  // const methods = useForm({ defaultValues: savedValues });
  const watch = methods.watch();


  useEffect(() => {
    setToLocalStorage(persistKey, JSON.stringify(watch));
  }, [watch, persistKey, methods]);

  const onSubmit = (data: any) => {
    submitHandler(data);
    setToLocalStorage(persistKey, JSON.stringify({}));
    reset();
  };

  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
