import vietnamLotusImage from "../../_global/assets/landingPageAssets/dreaming-beauty-of-lotus-in-ninh-binh-2.jpg";
import lotusWoman from "../../_global/assets/landingPageAssets/lotuswoman.jpg";
import hoa1 from "../Body/image/hoa1.jpg";
import hoa2 from "../Body/image/hoa2.jpg";
import hoa3 from "../Body/image/hoa3.jpg";
import hoa4 from "../Body/image/hoa4.jpg";
import hoa5 from "../Body/image/hoa5.jpg";
import hoa6 from "../Body/image/hoa6.jpg";
import hoa7 from "../Body/image/hoa7.jpg";
import hoa8 from "../Body/image/hoa8.jpg";
import hoa9 from "../Body/image/hoa9.jpg";
import hoa10 from "../Body/image/hoa10.jpg";
import hoa11 from "../Body/image/hoa11.jpg";
import hoa12 from "../Body/image/hoa12.jpg";
import tinnhan from "../Body/image/tinnhan.png";
import giaohoa from "../Body/image/giaohoa.webp";
import AnhTai from "../../_global/assets/ImageFounder/AnhTai.jpg";
import ChiAi from "../../_global/assets/ImageFounder/ChiAi.jpg";
import AnhTrung from "../../_global/assets/ImageFounder/AnhTrung.jpg";
import ChiThien from "../../_global/assets/ImageFounder/ChiThien.jpg";
import ThayBao from "../../_global/assets/ImageFounder/ThayBao.jpg";
import ChiAnh from "../../_global/assets/ImageFounder/ChiAnh.jpg";
import "./Body.scss";
export default function Body() {
  const listPerson = [
    {
      urlImage: ChiAi,
      name: "Bà Trần Thị Hữu Ái",
      role: "CEO",
      experience: [
        "Có hơn 20 năm kinh nghiệm ứng dụng CNTT vào quản lí và điều hành kinh doanh, trong đó có quản lí dự án ngành CNTT.",
        "Có hơn 10 năm kinh nghiệm kinh doanh trồng và phân phối ngành Hoa Tươi",
        "Hơn 5 năm Ngành Chăm sóc sức khỏe chủ động",
      ],
    },
    {
      urlImage: ChiThien,
      name: "Bà Phan Hiếu Thiện ",
      role: "Giám Đốc Vân Hành",
      experience: [
        "Có 20 năm kinh nghiệm vai trò lãnh đạo cấp Phường.",
        "Có hơn 10 năm kinh nghiệm kinh doanh trồng và phân phối ngành Hoa Tươi",
        "Có hơn  20 năm chuyên ngành dịch vụ báo cáo thuế cho các doanh nghiệp",
      ],
    },
    {
      urlImage: AnhTrung,
      name: "Ông Lương Ngọc Trung",
      role: "Giám Đốc Chiến Lược",
      experience: [
        "Có hơn 30 năm kinh nghiệm ứng dụng CNTT vào quản lí và điều hành kinh doanh, trong đó có quản lí dự án ngành cơ khí và ngành Sơn.",
        "Từng là nhà huấn luyện doanh nghiệp tại ACTION COACH.",
        "Hiện tại, Ông đang quản lí nhiều dự án xã hội mang tầm cỡ quốc gia.",
      ],
    },
    {
      urlImage: ChiAnh,
      name: "Bà Châu Hồng Anh",
      role: "Giám Đốc Đào Tạo",
      experience: [
        "Có hơn 20 năm kinh nghiệm ứng dụng CNTT vào quản lí và điều hành công ty đào tạo và huấn luyện Doanh Nghiệp trong và ngoài nước..",
      ],
    },
    {
      urlImage: ThayBao,
      name: "Ông Nguyễn Thiên Bảo",
      role: "Giám đốc R&D",
      experience: [
        "Ông tốt nghiệp tiến sĩ AI tại Thụy Sĩ, và công tác  tại Mỹ 3 năm.",
        "Hiện tại, Ông là chuyên gia trí tuệ nhân tạo (AI) trẻ tuổi hàng đầu tại Viêt Nam",
      ],
    },
    {
      urlImage: AnhTai,
      name: "Ông Phan Minh Tài",
      role: "Giám Đốc CNTT",
      experience: [
        "Hơn 10 năm kinh nghiệm ROBOT",
        "Ông là người đầu tiên dùng BOT để khớp lệnh giao dịch chứng khoán giữa 2 sàn",
      ],
    },
  ];
  return (
    <div className="">
      <section className="bg-center bg-no-repeat bgHero bg-gray-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            {" "}
            Nơi giao nhau giữa những tâm hồn yêu hoa!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            {" "}
            Kết nối từ vườn hoa tới các shop hoa để đến tận tay người tiêu dùng
            một cách thuận tiện hơn cùng FMP
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-screen-xl py-8 lg:py-16">
        <div className="bg-gray-50 dark:bg-gray-800 border space-y-10 text-center border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-bold mb-2">
            Sàn giao dịch hoa tươi đầu tiên tại Việt Nam kết nối đến{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 text-4xl font-extrabold md:text-6xl from-sky-400">
              10 quốc gia
            </span>{" "}
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Khẳng định vị thế là đơn vị cung cấp dịch vụ và giải pháp cho thị
            trường hoa tốt hàng đầu Việt Nam, FMP là sàn thương mại điện tử hoa
            tươi trực tuyến uy tín, đem đến cho các nhà vườn, shop hoa các nhà
            kinh doanh hoa tươi một kênh bán hàng hiệu quả và tiên tiến.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-30 ">
          <div className="">
            <div className="h-80 relative w-full">
              <img
                src={vietnamLotusImage}
                alt=""
                className="h-1/2 2ns:h-full hover:transition duration-500 ease-in-out absolute hover:z-20 hover:drop-shadow-2xl transform hover:-translate-y-1 hover:scale-110 rounded-xl shadow-2xl border-8  border-gray-300"
              />
              <div className="absolute hover:transition duration-500 ease-in-out hover:drop-shadow-2xl transform hover:-translate-y-1 hover:scale-110 top-1/3 md:top-1/2 left-1/2 md:left-1/2 z-10 rounded-xl shadow-2xl border-8  border-gray-300">
                <img src={lotusWoman} alt="" className="h-1/2 md:h-full " />
              </div>
            </div>
          </div>
          <div className="gap-5 flex flex-col mb-10 md:mb-0 justify-center text-center md:text-right  items-end order-first md:order-last px-5">
            <h1 className="mb-4 text-4xl font-extrabold  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Giải pháp hoa tươi cho thị trường
            </h1>
            <p className="text-lg font-normal  text-gray-500 lg:text-xl dark:text-gray-400">
              Ở <strong>FMP</strong> chúng tôi đặt niềm tin của khách hàng là
              chân ái cho mọi hoạt động. Uy tín luôn được đảm bảo!
            </p>
            <button
              // onClick={() => navigate("/ve-chung-toi")}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tìm hiểu thêm về chúng tôi
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl my-24">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-center leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Cùng tham gia xây dựng thị trường hoa cùng FMP
        </h1>
        <h1 className="mb-4 text-xl font-extrabold tracking-tight  leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Sản phẩm đa dạng
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
          Đa dạng sản phẩm được cung cấp bởi hàng triệu nhà vườn trong và ngoài
          nước
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl mb-10 ">
        {/* <p
          // onClick={() => navigate("/vendor")}
          className="text-right py-2 hover:underline cursor-pointer"
        >
          Xem thêm các sản phẩm
        </p> */}
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa1}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa2}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa3}
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa4}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa5}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa6}
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover "
                  src={hoa7}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa8}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa9}
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa10}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa11}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={hoa12}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl text-right py-8 lg:py-16">
        <h1 className="mb-4 text-xl font-extrabold tracking-tight  leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Xử lí giao dịch siêu tốc
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
          Hoàn thành giao dịch chỉ trong 1 phút.
        </p>
      </div>

      <div className="mx-auto max-w-screen-xl my-10 ">
        <ol className="items-center sm:flex">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Tạo đơn hàng dễ dàng
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Ở FMP, việc bắt tay vào thị trường hoa chưa bao giờ dễ dàng đến
                thế!
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Khối lượng giao dịch lớn
              </h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Không còn lo vấn đề thiếu hàng hoá vì trên FMP, các đối tác của
                bạn luôn có đủ!
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Thanh toán tiện lợi, nhanh chóng
              </h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Luôn đảm bảo các giao dịch được nhanh chóng và an toàn
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="mx-auto max-w-screen-xl py-8 lg:py-16">
        <div className="flex flex-col sm:flex-row gap-5 justify-between">
          <div className="flex items-center">
            <div className="">
              <h1 className="mb-4 text-xl font-extrabold tracking-tight  leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                Quy trình vận chuyển thuận tiện
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                Tối ưu hoá quy trình, giảm thiểu chi phí vận hành, vận chuyển.
              </p>
            </div>
          </div>
          <img
            src={giaohoa}
            alt=""
            className="h-1/2 w-full sm:w-1/2 rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl py-8 lg:py-16">
        <div className="flex flex-col sm:flex-row gap-5 justify-between">
          <img
            src={tinnhan}
            alt=""
            className="h-1/2 w-full sm:w-1/2 rounded-lg object-cover"
          />
          <div className="flex items-center text-right order-first sm:order-last">
            <div className="">
              <h1 className="mb-4 text-xl font-extrabold tracking-tight  leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                Hỗ trợ 24/7
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                Nhân viên nhà FMP luôn túc trực 24/7 để hỗ trợ bạn với trải
                nghiệm trên sản phẩm nhà FMP.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Nguồn nhân lực của chúng tôi
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Sàn hoa FMP của chúng tôi bao gồm những nhân lực có thế mạnh về
              lĩnh vực kinh doanh cũng như công nghệ hàng đầu
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {listPerson?.map((index, key) => (
              <div key={key} className="">
                <div className="w-full flex justify-center mb-10">
                  <div className="shrink-0">
                    <img
                      className=" object-cover h-44 w-44 rounded-full"
                      alt=""
                      src={index?.urlImage}
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    {index?.name}
                  </h3>
                  <p className="font-semibold text-orange-500 "> {index?.role}</p>
                  <p className="text-gray-600 py-5 ">
                    <ul className="list-disc space-y-2 px-5">
                      {index?.experience?.map((i, k) => (
                        <li key={k}>{i}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
