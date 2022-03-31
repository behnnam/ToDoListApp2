import React from "react";

const Footer = () => 
 {
    return(
        <footer className="bg-indigo-500 text-sm font-bold text-white w-full">
            <div className="md:container md:mx-auto">
                <ul className="flex flex-col lg:flex-row text-xl">
                    <li className="basis-1/3">
                      <p className="pt-4">
                      <span className="	fa fa-map-marker mr-2"></span>
                       <spanp className="mr-2 ml-2">Find us</spanp>
                        <p><span className="text-xs">address</span></p>
                      </p> 
                    </li>
                    <li className="basis-1/3">
                        <p className="pt-4">
                        <span class="fa fa-volume-control-phone" aria-hidden="true"></span>
                        <span className="mr-2 ml-2">Call us</span>
                        <p><span className="text-xs">987654321</span></p>
                        </p>
                    </li>
                    <li className="basis-1/3">
                        <p className="pt-3">
                        <span class="fa fa-envelope-open" aria-hidden="true"></span>
                        <span className="mr-2 ml-2">Mail us</span>
                        <p><span className="text-xs">example@gmail.com</span></p>
                        </p>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;