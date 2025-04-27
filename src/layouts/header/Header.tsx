import Stack from "@/components/common/Stack";
import ButtonLayout from "@/components/layout/ButtonLayout";
import CircleLayout from "@/components/layout/CircleLayout";
import { FloatingLayout } from "@/components/layout/FloatingLayout";
import { ArrowLeft, Bell } from "lucide-react";

export default function Header({ title = "Header" }: { title?: string }) {
  return (
    <FloatingLayout as="header" className="w-full h-16 bg-my-primary text-my-text-light z-50">
      <Stack.H className="w-full h-full px-6" justify="between">
        {/* 뒤로가기 버튼 */}
        <ButtonLayout>
          <ArrowLeft />
        </ButtonLayout>

        {/* 제목 */}
        <h1 className="text-xl">{title}</h1>

        {/* 알림 버튼 */}
        <ButtonLayout className="w-10 h-10">
          <CircleLayout className="w-full h-full bg-my-background/20">
            <Bell className="text-my-background" />
          </CircleLayout>
        </ButtonLayout>
      </Stack.H>
    </FloatingLayout>
  );
}
