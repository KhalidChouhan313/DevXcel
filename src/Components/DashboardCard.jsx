import React from 'react'

function DashboardCard() {
  return (
    <div>
       <div className="px-10 py- flex flex-col lg:flex-row gap-6 -mt-[14vh] -ml-3">
          <div className="flex flex-col gap-3 w-full lg:w-[65%] ">
            <div className="bg-[#FFFFFF] rounded-md p-4 shadow h-[auto] flex  items-start hover:scale-105 transition ">
              <div className="flex flex-col items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 " />
                  <span className="font-semibold text-[3.5vh]">
                    Shariah Standard No. 7
                  </span>
                </div>
                <div className="text-[2.5vh] font-semibold">
                  <p>
                    Details the rules governing debt transfer from one party to
                    another, ensuring no increase in the debt amount and mutual
                    consent.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[2.5vh]">
                    <strong>issue</strong>2003
                  </div>

                  <div className="text-[2.5vh]">
                    <strong>Category</strong>Shariah
                  </div>

                  <div className="text-[2.5vh]">
                    <strong>Title</strong> Hawalah
                  </div>
                </div>
              </div>
              <div className="flex flex-col  items-end gap-6">
                <img
                  src="assets/Images/Group (1).png"
                  alt="img"
                  className="w-[5vw]"
                />
                <div className="">
                  <div className="text-[2.5vh] flex gap-2 tracking-[0px]">
                    <strong>Tags</strong>Debt,Transfer,Obligations,
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div
                className="bg-white rounded-lg flex flex-col gap-[2px] px-2 hover:scale-105 transition
               shadow-md w-full md:w-[40%] h-auto"
              >
                <div className="flex justify-between items-start ">
                  <h2 className="font-semibold text-[3.5vh]">
                    SS (8): Murabahah
                  </h2>
                  <span className="text-yellow-500 text-xl">🌟</span>
                </div>
                <p className="text-gray-700 text-[2.5vh]">
                  Murabahah is a sale contract in which the seller discloses the
                  cost of the item sold and adds a known profit margin. Comma...
                </p>
                <div className="flex text-[2.5vh] gap-2 text-gray-600 mt-2">
                  <div>April 30, 2025</div>
                  <div>Financing, Trade, Shariah</div>
                </div>
              </div>

              <div className="bg-white rounded-lg px-2  shadow-md flex-1 hover:scale-105 transition">
                <h2 className="font-semibold text-[3.5vh] mb-4 text-[#084C40]">
                  Recent Searches
                </h2>
                <ul className="space-y- text-gray-700 text-[2.5vh]">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    "Murabahah vs Mudarabah comparison"
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    "Deferred possession in Salam"
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    "Sukuk investment conditions"
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    "Termination clause in Ijarah"
                  </li>
                </ul>
                <div className=" w-full flex justify-end p-1">
                  <button className="text-[2.5vh] text-[#fff] bg-[#B39847] p-1 rounded-md  ">
                    {" "}
                    Click to see More
                  </button>
                </div>
              </div>
            </div>

            <div className=" rounded-md space-y-1  ">
              <strong className="font-semibold text-[3.5vh] ">
                What is the Codification?
              </strong>
              <p className="text-gray-700 text-[2.5vh] ">
                The Accounting Standards Codification (ASC) for Islamic
                Financial Institutions is the official source of authoritative
                accounting standards and principles tailored to the unique needs
                of Islamic finance. This codification consolidates all
                applicable accounting literature, ensuring adherence to the
                principles of Shariah-compliant finance while also aligning with
                global accounting practices. It is an essential tool for the
                accurate application of Islamic finance principles in financial
                reporting.
              </p>

              <h3 className="font-semibold text-[3.5vh]">How to Use It</h3>
              <p className="text-gray-700 text-[2.5vh]">
                For new users, there are two key resources to help you navigate
                the Codification:
              </p>
              <ol className="list-decimal pl-5  text-gray-700 text-[2.5vh] space-y-1">
                <li>
                  <strong>Help topics:</strong> A comprehensive list of specific
                  functions and lectures, with clear descriptions for each, that
                  guide you through the unique requirements of Islamic financial
                  uncertainty.
                </li>
                <li>
                  <strong>Use studies:</strong> This downloadable guide outlines
                  common use cases and provides detailed instructions on how to
                  apply the Codification effectively. If including tips,
                  practical examples, and functionality explanations for common
                  accounting and auditing tasks within Islamic finance.
                </li>
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-[30%]">
            <div className="bg-[#FFFFFF] rounded-md p-4 shadow hover:scale-105 transition">
              <h2 className="font-semibold text-[3.5vh] mb-4 flex  items-center gap-2">
                <img
                  src="assets/Images/image5.png"
                  alt=""
                  className="w-4 h-5"
                />
                Saved Standards
              </h2>
              <ul className="text-[2.5vh] text-gray-700 ">
                <li>
                  SS (9): Ijarah and Ijarah Muntahia Bittamleek — Lease-based
                  contracts
                </li>
                <li>
                  SS (6): Conversion of a Conventional Bank to an Islamic Bank —
                  Practical roadmap
                </li>
              </ul>
              <div className=" w-full flex justify-end p-1">
                <button className="text-[2.5vh] text-[#fff] bg-[#B39847] p-1 rounded-md  ">
                  {" "}
                  Click to see More
                </button>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-md px-3 shadow hover:scale-105 transition">
              <h2 className="font-semibold text-[3.5vh] ">History</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left  text-[2.5vh]">Standards</th>
                    <th className="text-left  text-[2.5vh]">Articles</th>
                    <th className="text-left  text-[2.5vh]">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-[0.5vh] text-[2vh]">01/03 / June</td>
                    <td className="py-[0.5vh] text-[2vh]">Annual</td>
                    <td className="py-[0.5vh] text-[2vh]">May 1, 2023</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-[0.5vh] text-[2vh]">04/05 / June</td>
                    <td className="py-[0.5vh] text-[2vh]">Annual</td>
                    <td className="py-[0.5vh] text-[2vh]">May 1, 2025</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-[0.5vh] text-[2vh]">06/05 / June</td>
                    <td className="py-[0.5vh] text-[2vh]">Annual</td>
                    <td className="py-[0.5vh] text-[2vh]">May 1, 2025</td>
                  </tr>
                  <tr>
                    <td className="py-[0.5vh] text-[2vh]">07/05 / June</td>
                    <td className="py-[0.5vh] text-[2vh]">Annual</td>
                    <td className="py-[0.5vh] text-[2vh]">May 1, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#FFF4D6] rounded-md px-3 py-2 space-y-2 shadow hover:scale-105 transition">
              <h2 className="font-semibold text-[2.8vh] ">Recently Viewed</h2>
              <p className="text-gray-700 mb-3 text-[2.5vh]">
                Current issuance and settlement of documentary credits, focusing
                on Shariah-compliant practices in international funds.
              </p>
              <div className="flex justify-between text-[2.5vh] text-gray-500">
                <span>May 1, 2025</span>
                <span>Documentary</span>
              </div>
            </div>

            <div className="bg-[#FFF4D6] rounded-md px-3 py-2 space-y-2 shadow hover:scale-105 transition cursor-pointer">
              <h2 className="font-semibold text-[2.8vh]">
                Ipser Leave-based contract
              </h2>
              <p className="text-gray-700 text-[2.5vh]">
                Ipser allows us to submit existing contracts where this basis or
                longer enters the credit ca.
              </p>
              <div className="flex justify-between text-[2.5vh] text-gray-500">
                <span>May 1, 2025</span>
                <span>Documentary</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashboardCard
