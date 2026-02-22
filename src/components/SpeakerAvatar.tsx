interface SpeakerAvatarProps {
  initials: string;
  gradient: string;
  size?: "sm" | "md";
}

export function SpeakerAvatar({ initials, gradient, size = "sm" }: SpeakerAvatarProps) {
  return (
    <div
      className={`speaker-avatar bg-gradient-to-br ${gradient}`}
      style={size === "md" ? { width: 40, height: 40, fontSize: 14 } : undefined}
    >
      {initials}
    </div>
  );
}
