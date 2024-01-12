import UPBreadCrumb from "@/components/ui/UPBreadCrumb";

const page = () => {
     return (
          <div>

               <UPBreadCrumb
                    items={[
                         {
                              label: `Home Register`,
                              link: `/home-register`,
                         },
                         {
                              label: `Home Details`,
                         },
                    ]}
               />

               Home Details Page
          </div>
     );
};

export default page;