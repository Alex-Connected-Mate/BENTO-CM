interface SpeakerAvatarProps {
  initials: string;
  gradient: string;
  size?: "sm" | "md";
}

export function SpeakerAvatar({ initials, gradient, size = "sm" }: SpeakerAvatarProps) {
  const sizeClasses = size === "sm" ? "h-8 w-8 text-xs" : "h-10 w-10 text-sm";

  return (
    <div
      className={`flex-shrink-0 ${sizeClasses} flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} font-bold text-white shadow-sm`}
    >
      {initials}
    </div>
  );
}
