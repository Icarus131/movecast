import React, { useState } from "react";

function Landing() {
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Please install MetaMask");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      localStorage.setItem("walletAddress", accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {}
      <section className="relative bg-black flex flex-col h-screen justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
            <h1
  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
  data-aos="zoom-y-out"
>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
    Move
  </span>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
    Cast
  </span>
</h1>

              <h2
                className="text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Streaming, but{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Decentralized
                </span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-400 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  A streaming service built on top of Movement network, allowing users
                  to create, share and watch videos completely decentralized
                </p>
                <button
      className="items-center bg-white rounded-full font-medium p-4 shadow-lg text-black"
      onClick={() => {
        // Calling the connectWallet function when the user clicks on the button
        connectWallet();
      }}
    >
      <span>Connect your MetaMask wallet</span>
    </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;