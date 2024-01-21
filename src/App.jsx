import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import '/styles.css';

// import required modules
import { Scrollbar } from "swiper/modules";
import BLine from "./components/BLine";

const App = () => {
  const [swiper, setSwiper] = useState(null);

  const handleKeyDown = (event) => {
    console.log(event.keyCode);
  };
  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      handleKeyDown(event);
      swiper.slideNext();
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [swiper]);
  return (
    <div className=" max-w-[1920px] mx-auto">
      <div className=" h-screen  mx-auto  max-h-[900px]">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="  h-full w-full "
          onSwiper={(s) => {
            console.log("initialize swiper", s);
            setSwiper(s);
          }}
        >
          <SwiperSlide className="  flex flex-col items-center   justify-center">
            <div className="w-[90%] relative h-[90%] sli  border-[4px] border-[#4F52FF] rounded-2xl  flex flex-col items-center  justify-center">
              <p className=" text-center text-4xl text-[#3f41ca]">Тема :</p>
              <p className=" text-center text-4xl text-[#3f41ca] font-extrabold">
                Принятие решений в <br /> потребительском поведении
              </p>
              <p className="text-[#3f41ca] absolute bottom-5 right-5">
                IERP-514R / AXMEDJANOV A. I.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli  font-bold  border-[4px]  p-10 border-[#4F52FF] rounded-2xl  flex flex-col  ">
              <h1 className="text-3xl text-[#3f41ca] font-extrabold">
                1. Определение проблемы:
              </h1>
              <BLine />
              <div className="flex gap-5 mt-10 h-[300px]">
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://cdn3.mbschool.ru/mbschool/articles/chesnokov/1.png"
                    className="w-full "
                    alt=""
                  />
                </div>

                <p className="text-xl  w-1/2">
                  Принятие решений в контексте потребительского поведения
                  начинается с определения проблемы, стоящей перед потребителем.{" "}
                  <br />
                  <br />
                  Эта фаза включает в себя осознание потребностей или
                  неудовлетворенности, что становится толчком к началу процесса
                  принятия решения.
                  <BLine />
                </p>
              </div>

              <div className="flex gap-5 mt-10 overflow-hidden">
                <p className="text-2xl ">
                  Пример: Потребитель может осознать, что его текущий мобильный
                  телефон устарел и не соответствует современным технологиям.
                </p>
                <img
                  src="https://img.gazeta.ru/files3/557/15443557/Sering-Merasa-Cemas-Mungkin-Saatnya-Kamu-Detox-Media-Sosial-pic_32ratio_1200x800-1200x800-75102.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli   font-bold   border-[4px] p-10 border-[#4F52FF] rounded-2xl  flex flex-col items-end ">
              <h1 className="text-3xl self-start w-full text-[#3f41ca] font-extrabold">
                2. Когнитивное принятие решений:
                <BLine />
              </h1>

              <div className="flex gap-5 mt-10 h-full ">
                <p className="text-xl w-1/2 h-full overflow-hidden">
                  Когнитивное принятие решений представляет собой фазу анализа
                  информации и оценки альтернатив. <br />
                  <br /> Потребитель собирает данные о доступных продуктах или
                  услугах, сравнивает их характеристики и выявляет, какие из них
                  соответствуют его потребностям.
                  <br />
                  <BLine />
                  <img
                    src="https://static.tildacdn.com/tild3065-6634-4565-b363-633038353065/fb_data-driven_.png"
                    className="w-full"
                    alt=""
                  />
                </p>
                <div className="w-1/2 rounded-2xl  overflow-hidden h-full">
                  <div className="h-[300px] overflow-hidden">
                    <img
                      src="https://cdn3.mbschool.ru/mbschool/articles/chesnokov/4.png"
                      className="w-full"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-5 mt-10  overflow-hidden">
                    <p className="text-2xl  ">
                      Пример: Исследование различных моделей мобильных
                      телефонов, сравнение их технических характеристик и
                      стоимости.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli font-bold   border-[4px] p-10 border-[#4F52FF] rounded-2xl  flex flex-col ">
              <h1 className="text-3xl text-[#3f41ca] font-extrabold">
                3. Принятие рутинных решений:
              </h1>
              <BLine />
              <div className="flex gap-5 mt-10 ">
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://sovman.ru/wp-content/uploads/2023/12/20945347-scaled.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
                <p className="text-xl w-1/2 flex flex-col justify-between">
                  Принятие рутинных решений связано с повседневными покупками и
                  выбором товаров, с которыми потребитель уже знаком.
                  <br />
                  <br /> В этом случае процесс принятия решений упрощается, так
                  как нет необходимости в глубоком анализе.
                  <BLine />
                  <p>
                    Пример: Покупка привычного бренда продуктов питания в
                    магазине, где потребитель уже знает качество и
                    характеристики товара.
                  </p>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli font-bold   border-[4px] p-10 border-[#4F52FF] rounded-2xl  flex flex-col ">
              <h1 className="text-3xl text-[#3f41ca] font-extrabold">
                4. Принятие семейных решений:
              </h1>
              <BLine />
              <div className="flex gap-5 mt-10   ">
                <p className="text-xl w-1/2 flex flex-col justify-between">
                  <p className="mb-5">
                    {" "}
                    Принятие семейных решений возникает, когда решения
                    принимаются в контексте семейных отношений.
                    <br />
                    <br /> Это может включать в себя согласование предпочтений
                    членов семьи, учет различных потребностей и нахождение
                    компромиссов.
                  </p>
                  <BLine />
                  <p className="mt-5">
                    Пример: Покупка семейного автомобиля, где нужно учесть
                    предпочтения каждого члена семьи, а также финансовые
                    возможности.
                  </p>
                </p>
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://cdn3.mbschool.ru/mbschool/articles/chesnokov/5.png"
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli  border-[4px] p-10 border-[#4F52FF]  rounded-2xl   flex flex-col items-center justify-center">
              <h1 className="text-5xl text-[#3f41ca] font-extrabold">
                Спасибо за внимение!
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default App;
