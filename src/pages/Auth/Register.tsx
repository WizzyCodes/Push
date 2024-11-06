// import React from 'react'
import bmage from "../../assets/background.0b475b0176902d502b82e5b0f20159b7a327fc8a363f2fd3615c3fe7d91095e9.png";

const Register = () => {
  const info = [
    {
      id: 1,
      title: "Sign Up with Google",
    },
    {
      id: 2,
      title: "Sign Up with Github",
    },
    {
      id: 1,
      title: "Sign Up with Email",
    },
  ];
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bmage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          flexDirection: "column",
          display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          height: `calc(100vh - 60px)`,
        }}
      >
        <div className="w-full flex flex-col">
          <div
            style={{
              // fontSize: "16px",
              padding: "16px 32px",
              display: "flex",
              gap: "5px",
              borderBottom: "1px solid black",
              color: "rgb(3, 27, 78)",
              backgroundColor: "RGB(212, 239, 238)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <strong
              style={{
                fontWeight: "800",
                color: "#031B4E",
                letterSpacing: "1px",
                lineHeight: "24px",
                fontFamily: "JetBrains Mono",
                fontSize: "18px",
              }}
            >
              Try DigitalOcean with a $200 credit
            </strong>
            <span
              style={{
                fontSize: "20px",
                color: "RGB(0, 12, 42)",
                margin: "0px 0px 0px 14px",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            >
              You will receive a $200 credit (good for 60 days) when you create
              a new account on DigitalOcean
            </span>
          </div>
          <div className="flex flex-col items-center ">
            <div className="p-[24px] w-[480px] h-[400px] bg-white mt-5 border rounded-3xl text-[#031B4E] text-[20px]  ">
              <h3 className=" font-[700] text-[32px]">Create Your Account</h3>
              <p className="mt-4 mb-4 text-[20px] text-[#4D5B7C] font-[Inter]">
                Start spending more time on your projects and less time managing
                your infrastructure.
              </p>
              <div className=" flex  flex-wrap">
                {info?.map((el: any) => (
                  <div className="w-[ ] ">
                    <div className="flex items-center gap-6 mb-10">
                      <div>{el.icon}</div>
                      <div>{el.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
