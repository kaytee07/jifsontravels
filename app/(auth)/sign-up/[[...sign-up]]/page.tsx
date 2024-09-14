import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <SignUp/>
    </div>
  )
}

export default SignUpPage;