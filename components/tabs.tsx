import React from "react";

export default function Tabs({ title, text }: any) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-orange-400"
                    : "text-orange-400 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> {title[0]}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-orange-400"
                    : "text-orange-400 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> {title[1]}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-orange-400"
                    : "text-orange-400 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> {title[2]}
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col text-center min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-4">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  
                  {text[0].tab.map(function(d:any){
                      return (
                        <>
                      <p>{d.text}</p><br/>
                      {d.images.map((i:any) => (<div className="aspect-w-auto aspect-h-auto" style={{display:"inline-block"}}>
                        <img width={300} height={200} style={{marginRight:"5px", verticalAlign:"middle", height:"100%"}} src={i}></img></div>))}
                      </>
                      )
                      })}
                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  {text[1].tab.map(function(d:any){
                    return (
                      <>
                    <p>{d.text}</p><br/>
                    {d.images.map((i:any) => (<div className="aspect-w-auto aspect-h-auto" style={{display:"inline-block"}}>
                        <img width={300} height={200} style={{marginRight:"5px", verticalAlign:"middle", height:"100%"}} src={i}></img></div>))}
                      </>
                      )
                      })}
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  {text[2].tab.map(function(d:any){
                      return (
                        <>
                      <p>{d.text}</p><br/>
                      {d.images.map((i:any) => (<div className="aspect-w-auto aspect-h-auto" style={{display:"inline-block"}}>
                        <img width={300} height={200} style={{marginRight:"5px", verticalAlign:"middle", height:"100%"}} src={i}></img></div>))}
                      </>
                      )
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
