import React from "react";
import { Star, GitFork, Users, BookOpen, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { GitHubProfile } from "@/lib/github";
import { PillButton } from "@/components/ui/pill-button";

interface GitHubStatsProps {
  profile: GitHubProfile;
}

export function GitHubStats({ profile }: GitHubStatsProps) {
  return (
    <div className="p-6 sm:p-8 rounded-[24px] bg-[#FFFFFF] border border-[#E0E0E0] mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border border-[#E0E0E0] bg-[#F3F3F3] shrink-0">
            {profile.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#707070]">
                <GithubIcon size={28} />
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-[#141414] tracking-tight">
                {profile.name}
              </h3>
              <span className="text-xs text-[#707070] font-mono">
                @{profile.username}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#707070] mt-0.5">
              {profile.bio} · {profile.location}
            </p>
          </div>
        </div>

        {/* Action button */}
        <div>
          <PillButton
            variant="secondary"
            size="md"
            href={profile.htmlUrl}
            external
          >
            <GithubIcon size={16} />
            <span>View GitHub</span>
            <ArrowUpRight size={15} className="text-[#707070]" />
          </PillButton>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-6 border-t border-[#EAEAEA]">
        <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#EBEBEB]">
          <div className="flex items-center gap-1.5 text-xs text-[#707070]">
            <BookOpen size={14} />
            <span>Repositories</span>
          </div>
          <div className="text-2xl font-semibold text-[#141414] mt-1 tracking-tight">
            {profile.publicRepos}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#EBEBEB]">
          <div className="flex items-center gap-1.5 text-xs text-[#707070]">
            <Star size={14} className="text-amber-500" />
            <span>Total Stars</span>
          </div>
          <div className="text-2xl font-semibold text-[#141414] mt-1 tracking-tight">
            {profile.totalStars}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#EBEBEB]">
          <div className="flex items-center gap-1.5 text-xs text-[#707070]">
            <Users size={14} />
            <span>Followers</span>
          </div>
          <div className="text-2xl font-semibold text-[#141414] mt-1 tracking-tight">
            {profile.followers}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#EBEBEB]">
          <div className="flex items-center gap-1.5 text-xs text-[#707070]">
            <GitFork size={14} />
            <span>Following</span>
          </div>
          <div className="text-2xl font-semibold text-[#141414] mt-1 tracking-tight">
            {profile.following}
          </div>
        </div>
      </div>
    </div>
  );
}
