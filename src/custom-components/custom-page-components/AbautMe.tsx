import { Heart, MapPin } from "lucide-react";
import IconBadge from "./IconBadge";

function AbautMe() {
  return (
    <section className="w-3/5 mt-12 mb-10 flex flex-col gap-6">
      <h2 className="text-white flex-col text-6xl">
        My <br />
        <span className="text-transparent bg-clip-text bg-radial-[at_10%_25%] from-[#A5E773] from-25% via-[#2E7A2B] via-60% to-[#2E7A2B]">
          Portfolio
        </span>
      </h2>
      <p className="text-white text-base">
        Hello! My name is Aleksy — I create graphic designs, web applications
        and variety of artistic works. Each of my projects is a thoughtful
        solution combining aesthetics with functionality.
      </p>
      <div className="flex flex-row gap-6.5">
        <IconBadge
          icon={MapPin}
          text={"Based in Lublin"}
          textSize="text-xl"
          className="text-zinc-300 bg-transparent"
        />
        <IconBadge
          icon={Heart}
          text={"Made with passion"}
          textSize="text-xl"
          className="text-zinc-300 bg-transparent"
        />
      </div>
    </section>
  );
}

export default AbautMe;
