"use client";

import React, { useState } from "react";
import { SKILLS_DATA, type SkillCategory } from "@/lib/constants";
import SkillBadge from "@/components/SkillBadge";
import { LuBrain } from "react-icons/lu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const SKILL_CATEGORIES: SkillCategory[] = [
  "Languages",
  "Frameworks & Libraries",
  "Databases",
  "Tools",
];

const SkillsSection = () => {
  const [activeTabValue, setActiveTabValue] = useState<string>(
    SKILL_CATEGORIES[0]
  );

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center justify-center gap-3">
            <LuBrain className="h-10 w-10 text-primary" />
            My Technical Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of technologies and tools I work with, categorized for
            clarity.
          </p>
        </div>

        <Tabs
          value={activeTabValue}
          onValueChange={setActiveTabValue}
          className="w-full"
        >
          <div className="relative">
            {/* Desktop Tabs: Full width, distributed */}
            <TabsList className="hidden md:flex w-full rounded-md bg-muted p-1 mb-8">
              {SKILL_CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="flex-1 text-sm sm:text-base data-[state=active]:shadow-md"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Mobile Tabs: Scrollable */}
            <ScrollArea className="md:hidden w-full mb-8">
              <div className="flex justify-center">
                <TabsList className="whitespace-nowrap rounded-md bg-muted p-1">
                  {SKILL_CATEGORIES.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="text-sm sm:text-base data-[state=active]:shadow-md"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {SKILL_CATEGORIES.map((category) => {
            const categorySkills = SKILLS_DATA.filter(
              (skill) => skill.category === category
            );
            return (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {categorySkills.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        className="h-full"
                      />
                    ))}
                  </div>
                </div>
                {categorySkills.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No skills listed in this category yet.
                  </p>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
