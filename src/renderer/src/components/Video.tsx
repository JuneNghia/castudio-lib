import { Video as VideoType } from "@renderer/interfaces/video.interface";
import {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import showLoading from "@renderer/common/function/showLoading";
import notify from "@renderer/common/function/notify";
import BackBtn from "./Button/BackBtn";

// Example link: https://drive.google.com/file/d/video/preview

const Video = memo(
  ({
    data,
    setData,
  }: {
    data: VideoType;
    setData: Dispatch<SetStateAction<VideoType | null>>;
  }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleBack = useCallback(() => {
      setData(null);
    }, []);

    const handleErrorLoad = useCallback(() => {
      setData(null);
      notify("error", "Không thể tải dữ liệu Video");
    }, []);

    useEffect(() => {
      showLoading(isLoading);
    }, [isLoading]);

    return (
      <>
        <div className="py-4 px-4 flex items-center gap-x-4">
          <div className="w-fit">
            <BackBtn handleClick={handleBack} text="Quay lại"/>
          </div>
          <div>
            Bạn đang xem bài giảng{" "}
            <span className="font-bold">{data.name}</span>
          </div>
        </div>
        <div className="w-full h-full justify-center flex items-center">
          <div
            style={{ width: "640px", height: "480px", position: "relative" }}
          >
            <iframe
              src={`https://drive.google.com/file/d/${data.url}/preview`}
              width="640"
              height="480"
              seamless={undefined}
              allowFullScreen
              onLoad={() => setIsLoading(false)}
              onError={handleErrorLoad}
            />

            <div
              style={{
                width: "80px",
                height: "80px",
                position: "absolute",
                opacity: 0,
                right: "0px",
                top: "0px",
              }}
            >
              &nbsp;
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default Video;
