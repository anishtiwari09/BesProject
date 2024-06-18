export default function NotificationText({ text, href }) {
  return (
    <div className="absolute z-[2] w-full  bottom-[-67px] contdown_container">
      <div className="coundown2  py-[30px]">
        <div className="flex gap-1">
          <div className={"marquee w-full"}>
            <div className={"marqueeInner"}>
              {href ? (
                <a target="_blank" href={href} className="cursor-pointer">
                  <span>{text}</span>
                </a>
              ) : (
                <span>{text}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
