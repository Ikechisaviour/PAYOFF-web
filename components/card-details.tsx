"use client";

export function CardDetails() {
    return (
      <div className="border rounded-lg p-5 grid gap-5 grid-cols-2 mt-5 ">
        <div>
          <h3 className="text-[#388903] text-xs lg:text-sm">
            Available balance
          </h3>
          <h1 className="text-[#666666] font-medium text-lg lg:text-xl">
            ₦30,290.09
          </h1>
        </div>
        <div>
          <h3 className="text-[#388903] text-xs lg:text-sm">Expiry date</h3>
          <h1 className="text-[#666666] font-medium text-lg lg:text-xl">
            09/24
          </h1>
        </div>

        <div>
          <h3 className="text-[#388903] text-xs lg:text-sm">Status</h3>
          <h1 className="text-[#666666] font-medium text-lg lg:text-xl">
            Active
          </h1>
        </div>
        <div>
          <h3 className="text-[#388903] text-xs lg:text-sm">Expiry date</h3>
          <h1 className="text-[#666666] font-medium text-lg lg:text-xl">
            09/24
          </h1>
        </div>
      </div>
    );
}
