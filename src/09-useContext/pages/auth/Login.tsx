import { useContext, useState } from "react"
import { Link, useNavigate,  } from "react-router"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { UserContext } from "@/09-useContext/context/UserContext"
import { toast } from "sonner"
import { CircleArrowLeft } from "lucide-react"

export function Login() {
  const { login } = useContext( UserContext);
  const [userId, setUserId] = useState('');
  const navigation = useNavigate();

  const handleSubmit = ( e : React.SubmitEvent<HTMLFormElement> ) => {
    e.preventDefault();
    const res = login(Number(userId));

    if( !res ) {
      toast.error('User not found', {
        position: "top-right"
      })
      return;
    }

    navigation('/profile');
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <Card className="w-full max-w-sm">

        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Link to='/' className="font-bold flex gap-1 items-center">
            <CircleArrowLeft size={18}/>
            Volver
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
            <div className="flex flex-col gap-6">              
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">UserID</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input 
                  id="password"
                   type="number"
                   value={userId}
                   onChange={(event)=>setUserId(event.target.value)} 
                   required />
              </div>
            </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>        
        </CardFooter>
      </Card>
    </form>
  )
}
