"use client";

import { FileImageOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

// import { Button } from "@/components/ui/button";
// import { ImagePlus, Trash } from "lucide-react";

interface ImageUploadProps {
  setImageUrl: (url: string) => void;
  imageUrl: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setImageUrl, imageUrl }) => {
  const [isMounted, setIsMounted] = useState(false);

  const onUpload = (result: any) => {
    setImageUrl(result.info.secure_url);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      {/* <div className="mb-4 flex items-center gap-4">
        <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
          <div className="z-10 absolute top-2 right-2">
            <Button>
              <Trash className="h-4 w-4" />
              <FileImageOutlined />
              <Avatar size={200} src={imageUrl} />
            </Button>
          </div>

          <Image fill className="object-cover" alt="Image" src={imageUrl} />
        </div>
      </div> */}
      <CldUploadWidget onUpload={onUpload} uploadPreset="sf4vsqtt">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              style={{ width: "100%" }}
              // disabled={disabled}
              // disabled={true}
              onClick={onClick}
            >
              {/* <ImagePlus className="h-4 w-4 mr-2" /> */}
              <FileImageOutlined />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
