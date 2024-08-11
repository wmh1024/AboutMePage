import {FaCarSide, FaTrophy} from 'react-icons/fa'; // 使用 react-icons 库中的奖杯图标
import {cn} from "@/lib/utils";
import React from "react";
import {SiAcm} from "react-icons/si";

function AwardList({awards}: { awards: AwardType[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {awards.map((award, idx) => (
        <div
          key={idx}
          className={cn(
            "relative group flex flex-col w-full h-full",
            "bg-background-hover hover:bg-background-active focus:bg-background-active transition-all",
            "rounded-lg shadow-md border cursor-pointer overflow-hidden"
          )}
        >
          <div className="flex flex-col p-6 pb-4 grow">
            <div className="flex items-center mb-4">
              {award.is_acm && (
                <SiAcm className="text-yellow-400 w-8 h-8 mr-4"/>
              )}
              {award.is_car && (
                <FaCarSide className="text-yellow-400 w-8 h-8 mr-4"/>
              )}

              {!award.is_acm && !award.is_car && (
                <FaTrophy className="text-yellow-400 w-8 h-8 mr-4"/>
              )}
              <div>
                <h3 className="text-lg font-bold">{award.title}</h3>
                <p className="text-sm text-secondary">{award.date}</p>
              </div>
            </div>
            <p className="text-sm text-secondary mt-1.5 line-clamp-2 mb-auto">
              {award.description}
            </p>
          </div>
        </div>
      ))}

    </div>
  )
    ;
}

type AwardType = {
  title: string;
  date: string;
  description: string;
  is_acm?: boolean;
  is_car?: boolean;
};


export default AwardList;
