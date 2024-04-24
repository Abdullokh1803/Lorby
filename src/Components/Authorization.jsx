import Lorby from "../assets/illustration.png";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { newSchema } from "../schemas/Schemas";

const Auth = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: newSchema
  });

  return (
    <div className="h-[100vh] border-2 border-black flex justify-evenly items-center">
      <div className="w-[480px] h-[671px]  flex flex-col justify-between">
        <img src={Lorby} alt="" />
        <div>
          <h1 className="text-5xl font-semibold leading-[71.28px]">Lorby</h1>
          <h2 className="text-[28px] font-normal leading-10">
            Твой личный репетитор
          </h2>
        </div>
      </div>
      <div className="w-[343px] h-[410px] flex flex-col justify-between">
        <h1 className="text-5xl font-semibold text-[32px] leading-[47px]">
          Вэлком бэк!
        </h1>
        <form onSubmit={handleSubmit} className="h-[210px] flex flex-col justify-between">
          <div className="h-[118px] flex flex-col justify-between">
            <input
              className="bg-[#F8F8F8] py-[13px] rounded-xl px-4"
              value={values.userName}
              onChange={handleChange}
              type="text"
              name="userName"
              placeholder="Введи логин"
              onBlur={handleBlur}
            />
            <input
              className="bg-[#F8F8F8] py-[13px] rounded-xl px-4"
              value={values.password}
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Введи пароль"
              onBlur={handleBlur}
            />
          </div>
          <button className="bg-[#292929] text-white py-[13px] rounded-xl px-4">
            Войти
          </button>
        </form>

        <NavLink to={"/Registretion"}>
          <p className="py-[13px] px-4">У меня еще нет аккаунта</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Auth;
