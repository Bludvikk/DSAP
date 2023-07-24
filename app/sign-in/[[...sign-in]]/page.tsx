import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="w-full h-full">
      <div className="items-center flex flex-row justify-center p-20">
        <SignIn />
      </div>
    </div>
  );
}
