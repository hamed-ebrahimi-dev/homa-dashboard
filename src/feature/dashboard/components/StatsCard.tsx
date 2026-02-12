"use client";

interface InfoCardProps {
  title: string;
  number: string;
  changePercentage: string;
  changeLabel: string;
  isPositive?: boolean;
  iconColor?: string;
  numberColor?: string;
}

const svgPaths = {
  p2844de00:
    "M20.7516 9.76031C20.5554 9.79314 20.3803 9.90255 20.2648 10.0645C20.1493 10.2264 20.1028 10.4276 20.1356 10.6237C20.2118 11.0785 20.25 11.5389 20.25 12C20.2518 14.0196 19.5095 15.969 18.165 17.4759C17.3285 16.2638 16.1524 15.3261 14.7844 14.7806C15.5192 14.2019 16.0554 13.4085 16.3184 12.5108C16.5815 11.6132 16.5582 10.6559 16.2519 9.77207C15.9457 8.88825 15.3716 8.12183 14.6096 7.5794C13.8475 7.03696 12.9354 6.74548 12 6.74548C11.0646 6.74548 10.1525 7.03696 9.39043 7.5794C8.62839 8.12183 8.05432 8.88825 7.74805 9.77207C7.44178 10.6559 7.41854 11.6132 7.68157 12.5108C7.94459 13.4085 8.4808 14.2019 9.21563 14.7806C7.84764 15.3261 6.67147 16.2638 5.835 17.4759C4.78005 16.2872 4.09094 14.8189 3.85054 13.2479C3.61014 11.6768 3.82868 10.0697 4.47988 8.61981C5.13108 7.16996 6.18722 5.93908 7.5213 5.07516C8.85539 4.21125 10.4106 3.75108 12 3.75C12.4611 3.74993 12.9215 3.78818 13.3762 3.86437C13.5715 3.89519 13.7711 3.84764 13.9315 3.73208C14.0919 3.61652 14.2002 3.44229 14.2329 3.2473C14.2655 3.0523 14.2198 2.85231 14.1057 2.69082C13.9917 2.52934 13.8184 2.41943 13.6238 2.385C11.587 2.04236 9.49401 2.35588 7.64703 3.28029C5.80006 4.2047 4.29465 5.69217 3.34817 7.52793C2.40169 9.3637 2.06311 11.4528 2.38132 13.4935C2.69953 15.5342 3.65806 17.421 5.11851 18.8815C6.57897 20.3419 8.46577 21.3005 10.5065 21.6187C12.5472 21.9369 14.6363 21.5983 16.4721 20.6518C18.3078 19.7053 19.7953 18.1999 20.7197 16.353C21.6441 14.506 21.9576 12.413 21.615 10.3762C21.5822 10.1801 21.4728 10.005 21.3108 9.88947C21.1489 9.77396 20.9477 9.7275 20.7516 9.76031ZM9 11.25C9 10.6567 9.17595 10.0766 9.50559 9.58329C9.83524 9.08994 10.3038 8.70542 10.8519 8.47836C11.4001 8.2513 12.0033 8.19189 12.5853 8.30764C13.1672 8.4234 13.7018 8.70912 14.1213 9.12868C14.5409 9.54824 14.8266 10.0828 14.9424 10.6647C15.0581 11.2467 14.9987 11.8499 14.7716 12.398C14.5446 12.9462 14.1601 13.4148 13.6667 13.7444C13.1734 14.0741 12.5933 14.25 12 14.25C11.2044 14.25 10.4413 13.9339 9.87868 13.3713C9.31607 12.8087 9 12.0456 9 11.25ZM6.945 18.5156C7.48756 17.6671 8.23501 16.9688 9.11843 16.4851C10.0018 16.0013 10.9928 15.7478 12 15.7478C13.0072 15.7478 13.9982 16.0013 14.8816 16.4851C15.765 16.9688 16.5124 17.6671 17.055 18.5156C15.6097 19.6397 13.831 20.2499 12 20.2499C10.169 20.2499 8.39031 19.6397 6.945 18.5156ZM22.2806 4.28062L19.2806 7.28062C19.211 7.35036 19.1283 7.40568 19.0372 7.44342C18.9462 7.48116 18.8486 7.50059 18.75 7.50059C18.6514 7.50059 18.5538 7.48116 18.4628 7.44342C18.3717 7.40568 18.289 7.35036 18.2194 7.28062L16.7194 5.78062C16.6497 5.71094 16.5944 5.62822 16.5567 5.53717C16.519 5.44613 16.4996 5.34855 16.4996 5.25C16.4996 5.15145 16.519 5.05387 16.5567 4.96283C16.5944 4.87178 16.6497 4.78906 16.7194 4.71937C16.8601 4.57864 17.051 4.49958 17.25 4.49958C17.3485 4.49958 17.4461 4.51899 17.5372 4.5567C17.6282 4.59442 17.7109 4.64969 17.7806 4.71937L18.75 5.68969L21.2194 3.21937C21.2891 3.14969 21.3718 3.09442 21.4628 3.0567C21.5539 3.01899 21.6515 2.99958 21.75 2.99958C21.8485 2.99958 21.9461 3.01899 22.0372 3.0567C22.1282 3.09442 22.2109 3.14969 22.2806 3.21937C22.3503 3.28906 22.4056 3.37178 22.4433 3.46283C22.481 3.55387 22.5004 3.65145 22.5004 3.75C22.5004 3.84855 22.481 3.94613 22.4433 4.03717C22.4056 4.12822 22.3503 4.21094 22.2806 4.28062Z",
  p86b90a0:
    "M10.5 6C10.5 6.09946 10.4605 6.19484 10.3902 6.26517C10.3198 6.33549 10.2245 6.375 10.125 6.375H6.375V10.125C6.375 10.2245 6.33549 10.3198 6.26517 10.3902C6.19484 10.4605 6.09946 10.5 6 10.5C5.90054 10.5 5.80516 10.4605 5.73484 10.3902C5.66451 10.3198 5.625 10.2245 5.625 10.125V6.375H1.875C1.77554 6.375 1.68016 6.33549 1.60984 6.26517C1.53951 6.19484 1.5 6.09946 1.5 6C1.5 5.90054 1.53951 5.80516 1.60984 5.73484C1.68016 5.66451 1.77554 5.625 1.875 5.625H5.625V1.875C5.625 1.77554 5.66451 1.68016 5.73484 1.60984C5.80516 1.53951 5.90054 1.5 6 1.5C6.09946 1.5 6.19484 1.53951 6.26517 1.60984C6.33549 1.68016 6.375 1.77554 6.375 1.875V5.625H10.125C10.2245 5.625 10.3198 5.66451 10.3902 5.73484C10.4605 5.80516 10.5 5.90054 10.5 6Z",
};

function IcPlus({ color = "#1A7B43" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="IC Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="IC Plus">
          <path d={svgPaths.p86b90a0} fill={color} id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IcMinus({ color = "#D14444" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="IC Minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="IC Minus">
          <rect width="12" height="2" y="5" fill={color} rx="1" />
        </g>
      </svg>
    </div>
  );
}

function IcUserCheck({ color = "#4464D1" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="IC UserCheck">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="IC UserCheck">
          <path d={svgPaths.p2844de00} fill={color} id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function StatsCard({
  title,
  number,
  changePercentage,
  changeLabel,
  isPositive = true,
  iconColor = "#4464D1",
  numberColor = "#23377c",
}: InfoCardProps) {
  const changeColor = isPositive ? "#1A7B43" : "#D14444";

  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip p-[16px] relative rounded-[16px] size-full"
      data-name="info card"
    >
      <div className="content-stretch flex gap-[8px] h-[29px] items-center justify-start py-[8px] relative rounded-[8px] shrink-0 w-full">
        <IcUserCheck color={iconColor} />
        <div className="content-stretch flex flex-[1_0_0] gap-[124px] items-center justify-start min-h-px min-w-px relative">
          <p
            className="font-['Vazirmatn:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-left"
            style={{ color: iconColor }}
          >
            {title}
          </p>
        </div>
      </div>

      <div className="content-stretch flex h-[43px] items-center justify-start py-[10px] relative shrink-0 w-full">
        <p
          className="font-['Vazirmatn:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[32px] text-left"
          style={{ color: numberColor }}
        >
          {number}
        </p>
      </div>

      <div className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0 w-full">
        {isPositive ? <IcPlus color={changeColor} /> : <IcMinus color={changeColor} />}
        <p className="font-['Vazirmatn:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#222] text-[12px] text-left">
          {changePercentage} {changeLabel}
        </p>
      </div>
    </div>
  );
}
