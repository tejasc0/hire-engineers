import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  const [stbutton, setStbutton] = useState("Mechanical");

  function handleStbutton(str) {
    setStbutton(str)
  }

  // const streams = [
  //   {
  //     "name":"Mechanical",
  //     "id":1,
  //     "companies": [
  //       {
  //         "id": 1,
  //         "src": "/public/streams/mech/mech1.png"
  //       },
  //       {
  //         "id": 2,
  //         "src": "/public/streams/mech/mech2.png"
  //       },
  //       {
  //         "id": 3,
  //         "src": "/public/streams/mech/mech3.png"
  //       },
  //       {
  //         "id": 4,
  //         "src": "/public/streams/mech/mech4.png"
  //       },
  //       {
  //         "id": 5,
  //         "src": "/public/streams/mech/mech5.png"
  //       }
  //     ],
  //     "skillSet": [
  //       {
  //         "id": 1,
  //         "skill":"Design Engineering",
  //       },
  //       {
  //         "id": 2,
  //         "skill":"Manufacturing Technology",
  //       },
  //       {
  //         "id": 3,
  //         "skill":"CFD and FEA",
  //       }
  //     ]
  //   },
  //   {
  //     "name":"Electrical/Electronics",
  //     "id":2,
  //     "companies": [
  //       {
  //         "id": 1,
  //         "src": "/public/streams/extc-elec/elec1.png"
  //       },
  //       {
  //         "id": 2,
  //         "src": "/public/streams/extc-elec/elec2.png"
  //       },
  //       {
  //         "id": 3,
  //         "src": "/public/streams/extc-elec/elec3.png"
  //       },
  //       {
  //         "id": 4,
  //         "src": "/public/streams/extc-elec/cLogo.png"
  //       },
  //       {
  //         "id": 5,
  //         "src": "/public/streams/extc-elec/ldraLogo.png"
  //       },
  //       {
  //         "id": 6,
  //         "src": "/public/streams/extc-elec/elec5.png"
  //       }
  //     ],
  //     "skillSet": [
  //       {
  //         "id": 1,
  //         "skill":"Design Engineering",
  //       },
  //       {
  //         "id": 2,
  //         "skill":"Manufacturing Technology",
  //       },
  //       {
  //         "id": 3,
  //         "skill":"CFD and FEA",
  //       },
  //       {
  //         "id": 4,
  //         "skill":"AUTOSAR and ADAS basics",
  //       }
  //     ]
  //   },
  //   {
  //     "name":"Civil",
  //     "id":3,
  //     "companies": [
  //       {
  //         "id": 1,
  //         "src": "/public/streams/civil/civil1.png"
  //       },
  //       {
  //         "id": 2,
  //         "src": "/public/streams/civil/civil2.png"
  //       },
  //       {
  //         "id": 3,
  //         "src": "/public/streams/civil/civil3.png"
  //       },
  //       {
  //         "id": 4,
  //         "src": "/public/streams/civil/civil4.png"
  //       },
  //       {
  //         "id": 5,
  //         "src": "/public/streams/civil/civil5.png"
  //       }
  //     ],
  //     "skillSet": [
  //       {
  //         "id": 1,
  //         "skill":"Design Engineering",
  //       },
  //       {
  //         "id": 2,
  //         "skill":"Manufacturing Technology",
  //       },
  //       {
  //         "id": 3,
  //         "skill":"CFD and FEA",
  //       }
  //     ]
  //   },
  //   {
  //     "name":"Computer Science",
  //     "id":4,
  //     "companies": [
  //       {
  //         "id": 1,
  //         "src": "/public/streams/mech/python.png"
  //       },
  //       {
  //         "id": 2,
  //         "src": "/public/streams/mech/sql.png"
  //       },
  //       {
  //         "id": 3,
  //         "src": "/public/streams/mech/tableau.png"
  //       },
  //       {
  //         "id": 4,
  //         "src": "/public/streams/mech/cs4.png"
  //       },
  //       {
  //         "id": 5,
  //         "src": "/public/streams/mech/cs5.png"
  //       }
  //     ],
  //     "skillSet": [
  //       {
  //         "id": 1,
  //         "skill":"Design Engineering",
  //       },
  //       {
  //         "id": 2,
  //         "skill":"Manufacturing Technology",
  //       },
  //       {
  //         "id": 3,
  //         "skill":"CFD and FEA",
  //       }
  //     ]
  //   }
  // ]

  return (
    <div className="font-poppins">
      <Head>
        <title>Hire Engineers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={0} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="grid grid-cols-2 mx-20">
        <div className="mt-14">
          <h2 className=" py-2 font-bold max-w-fit text-5xl banner-gradient">Hire skilled engineers</h2>
          <h1 className=" font-bold text-5xl text-[#1A202C]">at zero cost</h1>
          <p className="text-xl my-12 font-light  text-[#1A202C]">Recruit the ideal candidate for your business needs with Skill-Lync, in a hassle-free way</p>
          <button className="bg-[#0a1931] text-xl  font-semibold tracking-[0.3px] text-white px-28 my-4 py-2.5 rounded-md hover:bg-[#21CDAA] transition-colors duration-5000">Hire from us</button>
        </div>
        <div className="m-12">
          <img className="rounded-lg cursor-pointer" src="/accelerateHeroImage.png" alt="meeting" />
        </div>
      </div>
      <div className="flex flex-1 justify-around px-20 py-16 space-x-24 bg-[#F5F9FF] border-b-2 shadow-sm">
        <div>
          <h2 className="text-4xl text-[#0A1931]  font-bold">1,000+</h2>
          <p className="text-base text-[#0A1931]  font-normal">engineers hired in
            the last year</p>
        </div>
        <div>
          <h2 className="text-4xl text-[#0A1931]  font-bold">300+</h2>
          <p className="text-base text-[#0A1931]  font-normal">companies hiring
            from us</p>
        </div>
        <div>
          <h2 className="text-4xl text-[#0A1931]  font-bold">10,000+</h2>
          <p className="text-base text-[#0A1931]  font-normal">engineers equipped
            with job-ready skills</p>
        </div>
        <div>
          <h2 className="text-4xl text-[#0A1931]  font-bold">1 week</h2>
          <p className="text-base text-[#0A1931]  font-normal">express deployment of
            engineers</p>
        </div>
      </div>
      <div className="my-20">
        <h1 className="mx-auto text-4xl  font-bold banner-gradient max-w-fit">Top industry players</h1>
        <h1 className="text-center text-4xl text-[#1A202C]  font-light">who have hired from Skill-lync</h1>
      </div>
      <div className="flex flex-1 flex-wrap space-x-14 mx-20 my-20 justify-between">
        <div className="w-28 my-auto">
          <img src="/companies/kpit.png" alt="kpit" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/mahindraRise.png" alt="mahindraRise" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/ola.png" alt="ola" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/capgemini.png" alt="capgemini" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/expleo.png" alt="expleo" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/cyient.png" alt="cyient" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/hcl.png" alt="hcl" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/tata.jpeg" alt="tata" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/techMahindra.png" alt="techMahindra" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/renault.png" alt="renault" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/continental.png" alt="continental" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/tataelxsi.png" alt="tataelxsi" />
        </div>
        <div className="w-16 my-auto">
          <img src="/companies/zf.png" alt="zf" />
        </div>
        <div className="w-28 my-auto">
          <img src="/companies/sona.png" alt="sona" />
        </div>
      </div>
      <div className="bg-[#0A1931] py-20">
        <h1 className="text-4xl text-center text-white  font-bold py-14 px-48">Here&apos;s what our corporate partners say</h1>
        <div className="flex-flex-col space-y-16">
          <div>
            <p className="text-white text-xl text-center  font-light py-3 px-48">We are glad to partner with Skill-Lync for upskilling technical knowledge of our employees in key areas like vehicle development including electrification and software helping us deliver products and services to our customers, global and local.</p>
            <div className="w-96 border-t-2 border-[#0CA9A2] mx-auto"></div>
            <p className="text-base text-white  text-center py-3"><span className="font-semibold">Debashis Neogi, Managing Director</span><span className="font-light"> @ Renault Nissan Technology & Business Centre India (RNTBCI)</span></p>
          </div>
          <div>
            <p className="text-white text-xl text-center  font-light py-3 px-48">“Cyient has partnered with Skill-Lync to ensure that we continue to hire qualified professionals in embedded engineering. Bridging the skill gap at scale is critical across industry sectors, we believe this partnership will ensure that we have the required expertise in embedded engineering to deliver innovative solutions to our global customers.”</p>
            <div className="w-96 border-t-2 border-[#0CA9A2] mx-auto"></div>
            <p className="text-base text-white  text-center py-3"><span className="font-semibold">Rajendra Kumar Patro, SVP & Head, Global Delivery Operations</span><span className="font-light"> @ CYIENT</span></p>
          </div>
        </div>
      </div>
      <div className="bg-gradient">
        <div className="grid grid-cols-2 px-48 py-14">
          <div>
            <h1 className=" font-bold text-4xl">
              <span>Hire engineers equipped with the industry&apos;s</span><span className="banner-gradient"> leading tools & skills</span>
            </h1>
          </div>
          <div className="bg-[#EBF3FC] rounded-lg container-border">
            <p className="px-4 py-4 text-base  font-medium">Average work experience of learners</p>
            <div className="flex h-8 px-4 flex-1">
              <div className="w-[50%] bg-[#0A1931] rounded-l-md"><p className="px-3 text-white text-xs  font-normal py-2">0-2 years : 75%</p></div>
              <div className="w-[25%] bg-[#146CC5]"><p className="px-3 text-white text-xs  font-normal py-2">2-4 years : 15%</p></div>
              <div className="w-[25%] bg-[#1BABA9] rounded-r-md"><p className="px-3 text-white text-xs  font-normal py-2">{'>'}4 years : 10%</p></div>
            </div>
          </div>
        </div>
        <p className="font-light text-[#1A202C] text-base px-48">
          Click on each stream to view the tools & skill-sets that our students are upskilling with!
        </p>
        <div className="flex flex-1 space-x-2 px-48 py-3">
          <div className={stbutton == "Mechanical" ? "font-normal text-base text-white border-[1px] rounded-full cursor-pointer bg-black py-1 px-3 border-black" : "font-normal text-base text-[#0A1931] border-[1px] rounded-full cursor-pointer py-1 px-3 border-black"} onClick={() => handleStbutton("Mechanical")}>Mechanical</div>
          <div className={stbutton == "Electrical/Electronics" ? "font-normal text-base text-white border-[1px] rounded-full cursor-pointer bg-black py-1 px-3 border-black" : "font-normal text-base text-[#0A1931] border-[1px] rounded-full cursor-pointer py-1 px-3 border-black"} onClick={() => handleStbutton("Electrical/Electronics")}>Electrical/Electronics</div>
          <div className={stbutton == "Civil" ? "font-normal text-base text-white border-[1px] rounded-full cursor-pointer bg-black py-1 px-3 border-black" : "font-normal text-base text-[#0A1931] border-[1px] rounded-full cursor-pointer py-1 px-3 border-black"} onClick={() => handleStbutton("Civil")}>Civil</div>
          <div className={stbutton == "Computer Science" ? "font-normal text-base text-white border-[1px] rounded-full cursor-pointer bg-black py-1 px-3 border-black" : "font-normal text-base text-[#0A1931] border-[1px] rounded-full cursor-pointer py-1 px-3 border-black"} onClick={() => handleStbutton("Computer Science")}>Computer Science</div>
        </div>



        {/* Implement json array of objects here 
          
          <div className="grid grid-cols-2 px-48">
            <div>
              <p className="font-medium text-[#1A202C] text-sm underline">Tools Mastered By Our {stbutton} Engineers</p>
              <div className="flex flex-1">
              {streams.map((pic) =>
                <img id={pic.id} src={pic.src}>{pic.src}</img>
              )}
              </div>
            </div>
            <div>
              <p className="font-medium text-[#1A202C] text-sm underline">Skill Set Of Our {stbutton} Engineers</p>
              {streams.map((stream) =>
                <div id={stream.id} className="flex flex-col">
                  {
                    stream.skillSet.map((skill) => 
                    <p>{skill.skill}</p>
                    )
                  }
                </div>
              )}
            </div>
          </div> */}
        <div className="grid grid-cols-2 px-48">
          <div>
            <p className="font-medium text-[#1A202C] text-sm underline py-3">Tools Mastered By Our {stbutton} Engineers</p>
            {
              stbutton == "Mechanical" &&
              <div className="flex flex-1 py-8 space-x-2">
                <img className="w-20 my-auto" src="/streams/mech/mech1.png" alt="" />
                <img className="w-20 my-auto" src="/streams/mech/mech2.png" alt="" />
                <img className="w-20 my-auto" src="/streams/mech/mech3.png" alt="" />
                <img className="w-20 my-auto" src="/streams/mech/mech4.png" alt="" />
                <img className="w-20 my-auto" src="/streams/mech/mech5.png" alt="" />
              </div>
              || stbutton == "Electrical/Electronics" &&
              <div className="flex flex-1 py-8 space-x-2">
                <img className="w-20 my-auto" src="/streams/extc-elec/elec1.png" alt="" />
                <img className="w-20 my-auto" src="/streams/extc-elec/elec2.png" alt="" />
                <img className="w-20 my-auto" src="/streams/extc-elec/elec3.png" alt="" />
                <img className="w-20 my-auto" src="/streams/extc-elec/cLogo.png" alt="" />
                <img className="w-20 my-auto" src="/streams/extc-elec/ldraLogo.png" alt="" />
              </div>
              || stbutton == "Civil" &&
              <div className="flex flex-1 py-8 space-x-2">
                <img className="w-20 my-auto" src="/streams/civil/civil1.png" alt="" />
                <img className="w-20 my-auto" src="/streams/civil/civil2.png" alt="" />
                <img className="w-20 my-auto" src="/streams/civil/civil3.png" alt="" />
                <img className="w-20 my-auto" src="/streams/civil/civil4.png" alt="" />
                <img className="w-20 my-auto" src="/streams/civil/civil5.png" alt="" />
              </div>
              || stbutton == "Computer Science" &&
              <div className="flex flex-1 py-8 space-x-2">
                <img className="w-16 my-auto" src="/streams/cs/python.png" alt="" />
                <img className="w-20 my-auto" src="/streams/cs/sql.png" alt="" />
                <img className="w-20 my-auto" src="/streams/cs/tableau.png" alt="" />
                <img className="w-20 my-auto" src="/streams/cs/cs4.png" alt="" />
                <img className="w-20 my-auto" src="/streams/cs/cs5.png" alt="" />
              </div>

            }

          </div>
          <div>
            <p className="font-medium text-[#1A202C] text-sm underline py-3">Skill Set Of Our {stbutton} Engineers</p>
            {
              stbutton == "Mechanical" &&
              <div className="flex flex-1 py-8">
                <div className="flex flex-col">
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">Design Engineering</p>
                  </div>
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">Manufacturing Technology</p>
                  </div>
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">CFD and FEA</p>
                  </div>
                </div>
              </div>
              || stbutton == "Electrical/Electronics" &&
              <div className="flex flex-1 py-8">
                <div className="flex flex-col">
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">Design Engineering</p>
                  </div>
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">Manufacturing Technology</p>
                  </div>
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">CFD and FEA</p>
                  </div>
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">AUTOSAR and ADAS basics</p>
                  </div>
                </div>
              </div>
              || stbutton == "Civil" &&
              <div className="flex flex-1 py-8">
                <div className="flex flex-col">
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">Design Engineering</p>
                  </div>
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">Manufacturing Technology</p>
                  </div>
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">CFD and FEA</p>
                  </div>
                </div>
              </div>
              || stbutton == "Computer Science" &&
              <div className="flex flex-1 py-8">
                <div className="flex flex-col">
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">Design Engineering</p>
                  </div>
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">Manufacturing Technology</p>
                  </div>
                  <div className="flex flex-1">
                    <img className="h-5 w-5 my-auto mr-3" src="/assets/tickIcon.png" alt="" />
                    <p className="font-light text-base">CFD and FEA</p>
                  </div>
                </div>
              </div>

            }
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className="mx-28">
        <h1 className="font-bold text-4xl text-[#1A202C] my-8">Why hire from Skill-Lync?</h1>
        <div className="grid grid-cols-3 space-x-8 my-16">
          <div>
            <img className="h-96 object-cover rounded-xl" src="/why-section/whyHireImg1.jpg" alt="" />
            <p className="my-3"><span className="font-normal text-xl text-[#0A1931]">Industry-relevant content - Built and curated by</span><span className="font-bold text-xl text-[#0A1931]"> 1,250+ industry experts</span></p>
          </div>
          <div>
            <img className="h-96 object-cover rounded-xl" src="/why-section/whyHireImg2.jpg" alt="" />
            <p className="my-3"><span className="font-bold text-xl text-[#0A1931]">Immediately employable</span><span className="font-normal text-xl text-[#0A1931]"> talent pool with expertise in core skills</span></p>
          </div>
          <div>
            <img className="h-96 object-cover rounded-xl" src="/why-section/whyHireImg3.jpg" alt="" />
            <p className="my-3"><span className="font-bold text-xl text-[#0A1931]">Customised recruiting solutions</span><span className="font-normal text-xl text-[#0A1931]"> to meet your exact requirements</span></p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 bg-gradient-blue mx-28 my-16 rounded-lg">
        <div>
          <img className="h-64 mx-auto my-14" src="/view-projects/projectCardImg.png" alt="" />
        </div>
        <div className="my-14">
          <h1 className="font-bold text-4xl text-white">View projects by Skill-Lync students</h1>
          <h3 className="font-normal text-xl text-[#DBDBDB]">At Skill-Lync, students undertake multiple technical projects & share their reports.</h3>
          <button className="font-semibold text-xl text-[#0A1931] bg-[#3aecc8] rounded-lg px-32 py-1.5 my-8">Know more</button>
        </div>
      </div>
      <div className="px-28 bg-gradient-blue">
        <h1 className="font-bold text-4xl text-white py-10">How to hire from us?</h1>
        <div className="grid grid-cols-4 space-x-6">
          <div className="border-2 border-[#31C8AC] rounded-lg h-40">
            <h1 className="font-semibold text-xl text-[#31C8AC] px-6 pt-6 pb-3">Step 1</h1>
            <p className="font-normal text-base text-[#E5E5E5] px-6">Request a call back</p>
          </div>
          <div className="border-2 border-[#31C8AC] rounded-lg h-40">
            <h1 className="font-semibold text-xl text-[#31C8AC] px-6 pt-6 pb-3">Step 2</h1>
            <p className="font-normal text-base text-[#E5E5E5] px-6">Discuss your requirements and hiring needs</p>
          </div>
          <div className="border-2 border-[#31C8AC] rounded-lg h-40">
            <h1 className="font-semibold text-xl text-[#31C8AC] px-6 pt-6 pb-3">Step 3</h1>
            <p className="font-normal text-base text-[#E5E5E5] px-6">Handpick your candidates from our skilled students</p>
          </div>
          <div className="border-2 border-[#31C8AC] rounded-lg h-40">
            <h1 className="font-semibold text-xl text-[#31C8AC] px-6 pt-6 pb-3">Step 4</h1>
            <p className="font-normal text-base text-[#E5E5E5] px-6">Interview & hire suitable candidates with ease</p>
          </div>
          <div className="pb-8">
            <img className="h-20 mx-auto" src="/accelerateArrow.png" alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 space-x-16 mx-28">
        <div className="my-16">
          <h1 className="font-bold text-4xl text-[#0A1931]">Request a callback</h1>
          <h3 className="font-light text-xl text-[#0A1931] my-6">Our placement expert will get in touch with you within 24 hours on business working days</h3>
        </div>
        <div class="my-16">
          <form>
            <div class="form-group mb-6">
              <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Name" />
            </div>
            <div class="form-group mb-6">
              <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Phone Number" />
            </div>
            <div class="form-group mb-6">
              <input type="email" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email Address" />
            </div>
            <div class="form-group mb-6">
              <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Company Name" />
            </div>
            <div class="form-group mb-6">
              <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Designation" />
            </div>
            <div class="form-group form-check mb-6">
            </div>
            <button type="submit" class="
      px-32
      py-2.5
      bg-[#0a1832]
      text-white
      font-semibold
      text-2xl
      rounded
      shadow-md">Request a callback</button>
          </form>
        </div>
      </div>
      <div className="bg-[#232323] grid grid-cols-10 px-28 space-x-10">
            <div className="col-span-5">
              <img className="my-10" src="/footer-white-logo.svg" alt="" />
                <p className="font-normal text-base text-white">E-learning platform that equips ENGINEERS with industry-relevant skills, focussed on helping you land your dream job/admit.</p>
                <div className="flex flex-1 space-x-3 my-10">
                  <div>
                    <img className="cursor-pointer" src="/assets/facebook.svg" alt="" />
                  </div>
                  <div>
                    <img className="cursor-pointer" src="/assets/insta.svg" alt="" />
                  </div>
                  <div>
                    <img className="cursor-pointer" src="/assets/twitter.svg" alt="" />
                  </div>
                  <div>
                    <img className="cursor-pointer py-1" src="/assets/youtube.svg" alt="" />
                  </div>
                  <div>
                    <img className="cursor-pointer" src="/assets/linkedin.svg" alt="" />
                  </div>
                </div>
            </div>
            <div className="col-span-2">
              <h3 className="font-medium text-xl text-white mt-10 my-4">Our Company</h3>
              <div className="flex flex-col space-y-1">
                <div>
                  <p className="font-normal text-sm text-white cursor-pointer">Skill-Lync.com</p>
                </div>
                <div>
                  <p className="font-normal text-sm text-white cursor-pointer">Blog</p>
                </div>
                <div>
                  <p className="font-normal text-sm text-white cursor-pointer">Industry Reports</p>
                </div>
                <div>
                  <p className="font-normal text-sm text-white cursor-pointer">Careers</p>
                </div>
                <div>
                  <p className="font-normal text-sm text-white cursor-pointer">News & Events</p>
                </div>
                <div>
                  <p className="font-normal text-sm text-white cursor-pointer">Privacy Policy</p>
                </div>
                <div>
                  <p className="font-normal text-sm text-white">Terms</p>
                </div>
              </div>
            </div>
            <div className="col-span-3 my-10">
              <div  className="flex flex-col space-y-3">
              <div className="flex flex-1">
                <img className="h-4 w-4 my-auto mr-2" src="/assets/googleMapIcon.svg" alt="" />
                <p className="font-normal text-sm text-white">EpowerX Learning Technologies Pvt Ltd. BAID Hi-Tech Park 129B, 2nd & 3rd Floor, Valmiki Nagar, East Coast Road, Thiruvanmiyur, Chennai - 600041.</p>
              </div>
              <div className="flex flex-1">
                <img className="h-4 w-4 my-auto mr-2" src="/assets/phoneIcon.svg" alt="" />
                <p className="font-normal text-sm text-white">+91 8939850851</p>
              </div>
              <div className="flex flex-1">
                <img className="h-4 w-4 my-auto mr-2" src="/assets/mailIcon.svg" alt="" />
                <p className="font-normal text-sm text-white">info@skill-lync.com</p>
              </div>
              <div className="flex flex-1">
                <img className="h-4 w-4 my-auto mr-2" src="/assets/mailIcon.svg" alt="" />
                <p className="font-normal text-sm text-white">ITgrievance@skill-lync.com</p>
              </div>
              </div>
            </div>
      </div>
    </div>

  )
}
