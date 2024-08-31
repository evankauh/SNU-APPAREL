import { Title, BodyOne, CustomLink, FooterCaption } from "./CustomComponents"

export const Footer = () => {
    return (
        <>
            <footer className="py-14 bg-black">
                <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        {/* <img src={LogoSource} alt="LogoImg" className="h-7"/> */}

                        <div className="flex flex-col gap-2 mt-5">
                            <FooterCaption>Address: 9500 Gilman Drive, San Diego, CA</FooterCaption>
                            <FooterCaption>Email: UCSDSigmaNu@gmail.com</FooterCaption>
                            <FooterCaption>Call: (123) 456-7890</FooterCaption>
                        </div>
                        <br/>
                        <BodyOne>Subscribe to our Newsletter</BodyOne>
                        <input 
                            type="text" 
                            className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none"
                            placeholder="Enter Email Address"
                        />
                    </div>
                    <div>
                        <Title level={6}>Useful Links</Title>
                        <div className="flex flex-col gap-4">
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                        </div>
                    </div>
                    <div>
                        <Title level={6}>Follow Us</Title>
                        <div className="flex flex-col gap-4">
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                        </div>
                    </div>
                    <div>
                        <Title level={6}>Our Stuff</Title>
                        <div className="flex flex-col gap-4">
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                            <CustomLink className="text-white">Words</CustomLink>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}