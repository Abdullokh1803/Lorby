import Lorby from "../assets/illustration.png";
import { useFormik } from "formik";
import { newSchema } from "../schemas/Schemas";
import { Icon } from "react-icons-kit";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { useState } from "react";

const Regist = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = () => {
    console.log("submitted");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: newSchema,
      onSubmit,
    });

  console.log(errors);

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
      <div className="w-[343px] h-[600px] flex flex-col justify-between">
        <h1 className="text-5xl font-semibold text-[32px] leading-[47px]">
          Создать аккаунт Lorby
        </h1>
        <form
          onSubmit={handleSubmit}
          className="h-[454px] flex flex-col justify-between"
        >
          <div className="h-[336px] flex flex-col justify-between text-start">
            <input
              className={`bg-[#F8F8F8] py-[13px] rounded-xl px-4 ${
                errors.email && touched.email ? "bg-red-200" : "bg-[#F8F8F8]"
              }`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="email"
              placeholder="Введи адрес почты"
            />
            {errors.email && touched.email && (
              <p className="text-red-500">{errors.email}</p>
            )}
            <input
              className={`bg-[#F8F8F8] gap-[6px] py-[13px] rounded-xl px-4 ${
                errors.userName && touched.userName
                  ? "bg-red-200"
                  : "bg-[#F8F8F8]"
              }`}
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="userName"
              placeholder="Придумай логин"
            />
            {errors.userName && touched.userName && (
              <p className="text-red-500">{errors.userName}</p>
            )}
            <div className="h-[128px] flex flex-col justify-around">
              <div className="relative">
                <input
                  className={`w-full bg-[#F8F8F8] py-[13px] rounded-xl px-4 ${
                    errors.password && touched.password
                      ? "bg-red-200"
                      : "bg-[#F8F8F8]"
                  }`}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Создай пароль"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                >
                  <Icon
                    icon={showPassword ? basic_eye : basic_eye_closed}
                    size={18}
                  />
                </span>
              </div>
              <ul className="text-start list-disc mx-6 text-[#767676] font-medium text-xs">
                {errors.password === "password must be at least 8 characters" ||
                errors.password === "password must be at most 15 characters" ||
                errors.password === "Required" ? (
                  <li
                    className={
                      touched.password ? "text-red-500" : "text-[#767676]"
                    }
                  >
                    от 8 до 15 символов{touched.password ||
                    errors.password === "Required" === "text-red-500"
                      ? "❌"
                      : null}
                  </li>
                ) : (
                  <li
                    className={
                      touched.password ? "text-green-500" : "text-[#767676]"
                    }
                  >
                    от 8 до 15 символов{touched.password ||
                    errors.password === "Required" === "text-green-500"
                      ? "✅"
                      : null}
                  </li>
                )}
                {errors.password === 'Пароль должен соответствовать условиям' ||
                errors.password === "Required" ? (
                  <li
                    className={
                      touched.password ? "text-red-500" : "text-[#767676]"
                    }
                  >
                    Строчные и прописные буквы
                    {touched.password ||
                    (errors.password === "Required") === "text-red-500"
                      ? "❌"
                      : null}
                  </li>
                ) : (
                  <li
                    className={
                      touched.password ? "text-green-500" : "text-[#767676]"
                    }
                  >
                    Строчные и прописные буквы
                    {touched.password ||
                    (errors.password === "Required") === "text-green-500"
                      ? "✅"
                      : null}
                  </li>
                )}
                <li>Минимум 1 цифра</li>
                {errors.password === 'Пароль должен соответствовать условиям' ||
                errors.password === "Required" ? (
                  <li
                    className={
                      touched.password ? "text-red-500" : "text-[#767676]"
                    }
                  >
                    Минимум 1 спецсимвол (!, #, $...)
                    {touched.password ||
                    (errors.password === "Required") === "text-red-500"
                      ? "❌"
                      : null}
                  </li>
                ) : (
                  <li
                    className={
                      touched.password ? "text-green-500" : "text-[#767676]"
                    }
                  >
                    Минимум 1 спецсимвол (!, #, $...)
                    {touched.password ||
                    (errors.password === "Required") === "text-green-500"
                      ? "✅"
                      : null}
                  </li>
                )}
              </ul>
            </div>
            <div className="relative">
              <input
                className={`w-full bg-[#F8F8F8] py-[13px] rounded-xl px-4 pr-10 ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "bg-red-200"
                    : "bg-[#F8F8F8]"
                }`}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Повтори пароль"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              >
                <Icon
                  icon={
                    showConfirmPassword ? basic_eye : basic_eye_closed
                  }
                  size={18}
                />
              </span>
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#292929] text-white py-[13px] rounded-xl px-4"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Regist;