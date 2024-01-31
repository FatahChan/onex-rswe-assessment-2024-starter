"use client";

import * as React from "react";
import Link from "next/link";

import { US, SG } from "country-flag-icons/react/3x2";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "./ui/button";
import LoginModal from "./loginModal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Honda E",
    href: "/product/2",
    description:
      "Honda E is a fully electric car with a unique combination of dynamic performance, refined comfort and cutting-edge technology.",
  },
  {
    title: "Toyota Yaris",
    href: "/product/3",
    description:
      "The Toyota Yaris is a subcompact car sold by Toyota since 1999, replacing the Starlet and Tercel.",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MainNavigation = () => {
  return (
    <nav className=" shadow">
      <NavigationMenu className="flex max-w-[1320px] m-auto  items-center py-5 justify-between">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Image
                  src={"/main-logo.svg"}
                  alt="logo"
                  width={160}
                  height={30}
                />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Find EV Cars</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>EV Guides</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Select defaultValue="US">
              <SelectTrigger className="border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="SG">
                    <SG className="w-5" />
                  </SelectItem>
                  <SelectItem value="US">
                    <US className="w-5" />
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <LoginModal>
              <Button variant="link">Log In / Sign Up</Button>
            </LoginModal>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* <div className="flex max-w-[1320px] m-auto  items-center py-5 justify-between">
        <div>
          <Image src={"/main-logo.svg"} alt="logo" width={160} height={30} />
        </div>
        <div></div>
      </div> */}
    </nav>
  );
};

export default MainNavigation;
