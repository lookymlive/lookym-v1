import { FC } from "react";
import {
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINav,
} from "@nextui-org/react";
import Link from "next/link";
import { auth, signOut } from "@/auth";

interface Props {}

const Navbar: FC<Props> = async () => {
  const session = await auth();

  return (
    <NextUINav shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          Lookym 
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        {session ? (
          <>
            <NavbarItem>
              <Link href="/profile">Profile</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/edit-profile">Edit Profile</Link>
            </NavbarItem>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit">Log Out</button>
            </form>
          </>
        ) : (
          <>
            <NavbarItem>
              <Link href="/sign-in">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/sign-up" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </NextUINav>
  );
};

export default Navbar;
