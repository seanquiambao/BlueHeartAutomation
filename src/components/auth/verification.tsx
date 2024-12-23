import { FormEvent } from "react";
import { Label } from "../ui/label";
// import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
interface VerifyFormProps {
  handleVerify: (e: FormEvent) => void;
  code: string;
  setCode: (value: string) => void;
}

const Verification = ({ handleVerify, code, setCode }: VerifyFormProps) => {
  return (
    <div className="h-auto bg-white w-full md:w-1/4 justify-items-center">
      <h1 className="font-bold text-2xl">Verify your email</h1>
      <form onSubmit={handleVerify} className="space-y-3 text-center">
        <div className="space-y-2">
          <Label id="code">Enter your verification code</Label>
          {/* <Input
          value={code}
          id="code"
          name="code"
          onChange={(e) => setCode(e.target.value)}
        /> */}
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            value={code}
            id="code"
            name="code"
            onChange={(value) => setCode(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="flex justify-center">
          <Button variant="ttickle" type="submit">
            Verify
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Verification;
