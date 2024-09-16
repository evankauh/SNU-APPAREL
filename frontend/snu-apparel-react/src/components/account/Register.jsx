import { useState } from "react"
import { SmallCaption, TextBox, Dropdown, RegisterButton, Checkbox } from "../common/CustomComponents"


export const Register = () => {
    const countries = ["USA", "Ireland", "India", "China"] //insert array of all countries to put into dropdown list

    const [maleSelected, setMaleSelected] = useState(false);
    const [femaleSelected, setFemaleSelected] = useState(false);

    const selectMale = () => {
        setMaleSelected(true);
        setFemaleSelected(false);
    }

    const selectFemale = () => {
        setMaleSelected(false);
        setFemaleSelected(true);
    }
    return (
        <div className="flex justify-center items-center">
            <div className="w-[300px] flex flex-col items-center gap-4 mt-20">
                <div className="py-5 text-white uppercase font-bold">Make an account</div>
                <SmallCaption className="mb-5">Create your UCSD SNU Shop profile and get first access to the very best of Sigma Nu merch, inspiration, and community.</SmallCaption>
                <TextBox>Email Address</TextBox>
                <TextBox>Password</TextBox>
                <TextBox>First Name</TextBox>
                <TextBox>Last Name</TextBox>
                <TextBox>Date of Birth</TextBox>
                <div className="text-light-gray text-[12px] text-center">Recieve a Special SNU Birthday reward every year.</div>
                <Dropdown list={countries}>Country</Dropdown>
                <div className="gender-container w-[100%] flex flex-row gap-5 space-between items-center justify-center">
                    <RegisterButton color={maleSelected ? 'white' : 'black'} onClick={selectMale}>Male</RegisterButton>
                    <RegisterButton color={femaleSelected ? 'white' : 'black'} onClick={selectFemale}>Female</RegisterButton>
                    {/* why does this onclick function not work??? */}
                </div>
                <div className="flex flex-row w-[100%] items-left gap-3 px-3">
                    <Checkbox></Checkbox>
                    <div className="text-[11px] text-gray-300">Sign up for emails to get updates from SNU on products, offers, and upcoming sales</div>
                </div>
                <div className="text-light-gray text-[12px] text-center">By creating an account, you agree to our Privacy Policy and Terms of Use</div>
                <RegisterButton color="white" className="uppercase">Join Us</RegisterButton>
                <div className="flex flex-col items-center gap-3 w-[100%]">
                    <div className="text-[11px] text-gray-300">Already a member?</div>
                    {/* <CustomLink className="text-white">Login</CustomLink> */}
                    <RegisterButton color="black" className="uppercase">Login</RegisterButton>
                </div>
                

            </div>
        </div>
    )
}