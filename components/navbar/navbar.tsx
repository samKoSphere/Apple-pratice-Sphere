import { UserButton, auth, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import Shopwitcher from "@/components/store-switcher";
// import { MainNav } from "@/components/main-nav";
// import { ThemeToggle } from "@/components/theme-toggle";
import prismadb from "@/lib/prismadb";
import User from "./User";
import { NavigationMenu } from "./navigation-menu";

const Navbar =  () => {
  // const {  user } =  useUser();
  const { orgRole } = auth();
  // const Shop = await prismadb.shop.findMany({
  //   where: {
  //     userId,
  //   }
  // });

  return ( 
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        {/* <Shopwitcher items={Shop} /> */}
        {/* <MainNav className="mx-6" /> */}
        <div className="ml-auto flex items-center space-x-4 gap-3">
          {/* <ThemeToggle /> */}
          <NavigationMenu/>
        <User/>
  
             
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;
