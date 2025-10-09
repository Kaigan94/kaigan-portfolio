import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import type { TechStack } from "../types/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  const stackItems = TECH_STACK.filter((tech) => tech.segment === "stack");
  const toolItems = TECH_STACK.filter((tech) => tech.segment === "tools");

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <div className="space-y-6">
          {stackItems.length > 0 && <TechIconList items={stackItems} />}

          {toolItems.length > 0 && (
            <section className="space-y-3">
              <h3 className="text-xs font-semibold tracking-wide text-muted-foreground">
                Tools
              </h3>

              <TechIconList items={toolItems} />
            </section>
          )}
        </div>
      </PanelContent>
    </Panel>
  );
}

function TechIconList({ items }: { items: TechStack[] }) {
  return (
    <ul className="flex flex-wrap gap-4 select-none">
      {items.map((tech) => (
        <li key={tech.key} className="flex">
          <SimpleTooltip content={tech.title}>
            <a
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tech.title}
              className="group inline-flex"
            >
              {tech.theme ? (
                <>
                  <Image
                    src={`/icons/tech-stack/${tech.key}-light.svg`}
                    alt={`${tech.title} light icon`}
                    width={32}
                    height={32}
                    className={cn(
                      "hidden [html.light_&]:block",
                      "transition-transform duration-200 group-hover:scale-110"
                    )}
                    unoptimized
                  />
                  <Image
                    src={`/icons/tech-stack/${tech.key}-dark.svg`}
                    alt={`${tech.title} dark icon`}
                    width={32}
                    height={32}
                    className={cn(
                      "hidden [html.dark_&]:block",
                      "transition-transform duration-200 group-hover:scale-110"
                    )}
                    unoptimized
                  />
                </>
              ) : (
                <Image
                  src={`/icons/tech-stack/${tech.key}.svg`}
                  alt={`${tech.title} icon`}
                  width={32}
                  height={32}
                  className="transition-transform duration-200 group-hover:scale-110"
                  unoptimized
                />
              )}
              <span className="sr-only">{tech.title}</span>
            </a>
          </SimpleTooltip>
        </li>
      ))}
    </ul>
  );
}
