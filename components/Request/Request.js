import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Request({ onClick }) {
  const RequestError = yup.object().shape({
    name: yup.string().required("Գրեք Ձեր անունը"),
    phone: yup.string().required("Գրեք Ձեր հեռախոսի համարը"),
    mail: yup
      .string()
      .email(`Գրեք ճիշտ էլ․հասցե`)
      .required("Գրեք Ձեր էլ․ հասցեն"),
    message: yup.string().required("Գրեք հաղորդագրություն"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: "", phone: "", mail: "", message: "" },
    resolver: yupResolver(RequestError),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="absolute top-0 left-0 shadow-[0_5px_15px_rgba(0,0,0,0.1)] w-full h-full bg-[#00000080] flex justify-center items-center z-[11111]">
      <div className="md:w-[540px] w-[440px] h-[630px] bg-[#FFFFFF] rounded-2xl p-6">
        <div className="text-2xl float-right cursor-pointer" onClick={onClick}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 className="mt-6 text-2xl text-center font-medium">
          Отправьте нам заявку
        </h1>
        <p className="text-center text-base font-normal">
          И мы свяжемся с вами
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="px-16 mt-12">
          <div>
            <input
              {...register("name")}
              className="border-b-[0.5px] w-full outline-0 placeholder-[#7F8182]"
              placeholder="Ваше имя"
            />
            {errors && <p className="mb-0 text-sm">{errors.name?.message}</p>}
          </div>
          <div>
            <input
              {...register("mail")}
              className="border-b-[0.5px] w-full outline-0 mt-9 placeholder-[#7F8182]"
              placeholder="Ваш e-mail*"
            />
            {errors && <p className="mb-0 text-sm">{errors.mail?.message}</p>}
          </div>
          <div>
            <input
              {...register("phone")}
              className="border-b-[0.5px] w-full outline-0 mt-9 placeholder-[#7F8182]"
              placeholder="Ваш телефон"
            />
            {errors && <p className="mb-0 text-sm">{errors.phone?.message}</p>}
          </div>
          <div>
            <input
              {...register("message")}
              className="border-b-[0.5px] w-full outline-0 mt-9 placeholder-[#7F8182]"
              placeholder="Ваше сообщение"
            />
            {errors && <p className="mb-0 text-sm">{errors.message?.message}</p>}
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Отправить"
              className="bg-gradient-to-r to-[#7F8182] from-[#000000] text-[#FFFFFF] text-base p-2 w-40 rounded flex-auto mt-16"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
