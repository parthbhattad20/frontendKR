import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "../ui/use-toast";
import logo from "../../images/KloudRakhsa.png";

function Navbar() {
    const auth = useAuth();
    const { toast } = useToast();

    console.log(auth);

    function handleLogout() {
        auth?.logout();
        toast({
            title: `Logged out ${auth?.user?.name}`,
        });
    }

    const list = [
        {
            name: "About",
            link: "/about",
        },
        {
            name: auth?.user ? "Support" : "Help",
            link: auth?.user ? "/support" : "/help",
        },
        {
            name: "Contact",
            link: "/contact",
        },
        {
            name:  "Plans" ,
            link:  "/payment" 
        },
      
    ];
    return (
        <nav className="mx-auto py-4 px-4 flex justify-between max-w-7xl items-center">
            <div>
                <Link to="/">
                    <img
                        src={logo}
                        alt="Website Logo"
                        className="scroll-m-20 text-xl font-semibold tracking-tight"
                        style={{ width: "25%", height: "25%" }} // Reduce the size by 40%
                    />
                </Link>
            </div>
            <div className="flex gap-2 items-center">
                {list.map((item) => {
                    if (item.name === "Login") {
                        return (
                            <Button
                                className="font-bold"
                                variant="secondary"
                                key={item.name}
                                asChild
                            >
                                <Link to={item.link}>{item.name}</Link>
                            </Button>
                        );
                    } else if (item.name === "Get Started") {
                        return (
                            <Button
                                className="font-bold"
                                key={item.name}
                                asChild
                            >
                                <Link to={item.link}>{item.name}</Link>
                            </Button>
                        );
                    } else if (item.name === "Logout") {
                        return (
                            <Button
                                onClick={handleLogout}
                                className="font-bold"
                                key={item.name}
                                asChild
                            >
                                <Link to={item.link}>{item.name}</Link>
                            </Button>
                        );
                    }
                    return (
                        <Button
                            className="font-bold"
                            variant="ghost"
                            key={item.name}
                            asChild
                        >
                            <Link to={item.link}>{item.name}</Link>
                        </Button>
                    );
                })}
            </div>
        </nav>
    );
}

export default Navbar;
