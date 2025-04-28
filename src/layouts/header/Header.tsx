import Stack from "@/components/common/Stack";
import ButtonLayout from "@/components/layout/ButtonLayout";
import { FloatingLayout } from "@/components/layout/FloatingLayout";
import { ArrowLeft } from "lucide-react";
import AlertButtonRender from "./AlertButtonRender";

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
        <AlertButtonRender />
      </Stack.H>
    </FloatingLayout>
  );
}
