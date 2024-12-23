import { FormEvent } from "react";
interface VerifyFormProps {
  handleVerify: (e: FormEvent) => void;
  code: string;
  setCode: (value: string) => void;
}

const Verification = ({ handleVerify, code, setCode }: VerifyFormProps) => {
  return (
    <>
      <h1>Verify your email</h1>
      <form onSubmit={handleVerify}>
        <label id="code">Enter your verification code</label>
        <input
          value={code}
          id="code"
          name="code"
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
    </>
  );
};

export default Verification;
