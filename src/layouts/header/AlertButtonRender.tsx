"use client";

import Line from "@/components/common/Line";
import Stack from "@/components/common/Stack";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import ButtonLayout from "@/components/layout/ButtonLayout";
import CircleLayout from "@/components/layout/CircleLayout";
import ModalLayout from "@/components/layout/ModalLayout";
import OverlayLayout from "@/components/layout/OverlayLayout";
import Show from "@/components/util/Show";
import useBodyScroll from "@/hooks/useBodyScrollLock";
import { Bell, X } from "lucide-react";
import { useEffect, useState } from "react";

const _alerts = [
  {
    title: "스터디 신청이 승인되었습니다.",
    description: "파이썬 알고리즘 스터디 신청이 승인되었습니다. 첫 모임은 10월 15일 저녁 7시입니다.",
  },
  {
    title: "새 스터디 신청이 도착했습니다",
    description: "리액트 웹 개발 스터디에 새로운 신청자가 있습니다. 관리 페이지에서 확인해주세요.",
  },
  {
    title: "새 스터디 신청이 도착했습니다",
    description: "리액트 웹 개발 스터디에 새로운 신청자가 있습니다. 관리 페이지에서 확인해주세요.",
  },
  {
    title: "새 스터디 신청이 도착했습니다",
    description: "리액트 웹 개발 스터디에 새로운 신청자가 있습니다. 관리 페이지에서 확인해주세요.",
  },
  {
    title: "새 스터디 신청이 도착했습니다",
    description: "리액트 웹 개발 스터디에 새로운 신청자가 있습니다. 관리 페이지에서 확인해주세요.",
  },
];

export default function AlertButtonRender() {
  const [isOpen, setIsOpen] = useState(false);
  useBodyScroll(!isOpen);

  const toggleAlertModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* 알림 버튼 */}
      <ButtonLayout className="w-10 h-10" onClick={toggleAlertModal}>
        <CircleLayout className="w-full h-full bg-my-background/20">
          <Bell className="text-my-background" />
        </CircleLayout>
      </ButtonLayout>

      {/* 알림 오버레이 */}
      <Show when={isOpen}>
        <OverlayLayout className="bg-black/50" onClick={toggleAlertModal}>
          {/* 알림 모달 */}
          <ModalLayout className="inset-x-8 h-2/3 p-4 bg-white rounded-xl shadow-lg">
            <Stack.V className="w-full h-full text-black">
              <Stack.H className="w-full justify-between">
                <Title.h4>알림</Title.h4>
                <X className="w-6 h-6" onClick={toggleAlertModal} />
              </Stack.H>
              <Line.H />

              {/* 알림 영역 */}
              <Stack.V className="overflow-y-auto">
                {_alerts.map((alert) => (
                  <Stack.V key={alert.title} className="w-full p-2 rounded-lg bg-my-background-3">
                    <Title.h4>{alert.title}</Title.h4>
                    <Text.sm>{alert.description}</Text.sm>
                  </Stack.V>
                ))}
              </Stack.V>
            </Stack.V>
          </ModalLayout>
        </OverlayLayout>
      </Show>
    </div>
  );
}
