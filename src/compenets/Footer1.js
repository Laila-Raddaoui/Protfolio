import React from 'react'
import {Footer} from 'flowbite-react';

const Footer1 = () => {
    return (
       
        <Footer container={true}>
            <div className="w-full drop-shadow-md">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 drop-shadow-md">
                    <div>
                        <Footer.Brand                          
                        />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
                        <div>
                            <Footer.Title className="text-slate-700" title="About"  />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    React Development
                                </Footer.Link>
                                <Footer.Link href="#">
                                    
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className= "text-slate-700"title="Follow us" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="#">
                                    LinkedIn
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                         
                        </div>
                    </div>
                </div>
                
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between bg-teal-300">
                    <Footer.Copyright
                        href="#"
                        by="Made by Raddaoui laila™"
                        year={2023}
                    />
                </div>
            </div>
            
        </Footer>
    )
}

export default Footer1;