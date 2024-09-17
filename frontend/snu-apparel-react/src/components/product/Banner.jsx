import { promotionalInfo } from "../../assets/linkData/promotionalInfo";
import { BodyOne, Title, RoundedButton } from "../common/CustomComponents";

export const Banner = ({ title, subtitle, description, image, href, btnTitle }) => {
  return (
    <>
    <section className="flex flex-col items-center justify-between pt-20 bg-none">
      <div className="w-full px-10">
        <Title level={5} className="text-white py-5">{title}</Title>
        <div className="h-[40rem] w-[full]  overflow-hidden position-relative">
          <img src={image} alt={image} className="w-[100%] object-position-center"></img>
        </div>
      </div>
      <Title level={2} className="uppercase pt-10 text-center px-10">{subtitle}</Title>
      <div className="w-[25rem] text-[13px] text-white p-4 text-center">{description}</div>
      <RoundedButton classname="m-3">{btnTitle}</RoundedButton>
    </section>
    </>
  );
};  
