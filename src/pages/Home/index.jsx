"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { PersonalInfo } from "./../../components/PersonalInfo/PersonalInfo";
import { BillingInfo } from "../../components/BillingInfo/BillingInfo";
import { Payment } from "../../components/Payment/Payment";


const Home = () => {
  return (
      <div className="md:mt-20 md:ml-64 md:mr-40 sm:mt-10 ml-4 mr-4">
        <h3 className="md:text-3xl text-base font-bold text-[#4e598c] py-10 pl-4">Complete your Purchase</h3>
        {/* <hr className="border-none bg-light-black-1 h-[1px]" /> */}

        <Tabs.Root className=" " defaultValue="tab1">
          <Tabs.List
            className="shrink-0 flex gap-2 md:gap-8 border-b-[1px] border-black"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="md:px-8 px-2 h-[45px] text-[#bdbdbd] flex items-center text-xl font-bold select-none first:rounded-tl-2xl  last:rounded-tr-md data-[state=active]:text-[#f2994a] data-[state=active]:shadow-[inset_0_-1px_0_0,0_10px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
              value="tab1"
            >
              Personal Info
            </Tabs.Trigger>
            <Tabs.Trigger
              className="md:px-8 px-2 h-[45px] text-[#bdbdbd] flex items-center text-xl font-bold select-none first:rounded-tl-2xl  last:rounded-tr-md data-[state=active]:text-[#f2994a] data-[state=active]:shadow-[inset_0_-1px_0_0,0_10px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
              value="tab2"
            >
              Billing Info
            </Tabs.Trigger>
            <Tabs.Trigger
              className="px-8 h-[45px] text-[#bdbdbd] flex items-center text-xl font-bold select-none first:rounded-tl-2xl  last:rounded-tr-xl data-[state=active]:text-[#f2994a]  data-[state=active]:shadow-[inset_0_0_0_0,0_10px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
              value="tab3"
            >
              Confirm Payment
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="grow pt-8" value="tab1">
            <PersonalInfo />
          </Tabs.Content>
          <Tabs.Content className="grow pt-8" value="tab2">
            <BillingInfo />
          </Tabs.Content>
          <Tabs.Content className="grow pt-8" value="tab3">
            <Payment />
          </Tabs.Content>
        </Tabs.Root>
      </div>
  );
};

export default Home;
