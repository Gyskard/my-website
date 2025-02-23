import { describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { ShinyTech, GithubButton } from "@/app/career/page";

// Unit tests has been generated with IA (Claude 3.5 Sonnet).

describe("ShinyTech", () => {
  it("renders the tech prop correctly", () => {
    const tech = "React";
    render(<ShinyTech tech={tech} />);

    const element = screen.getByText(tech);
    expect(element).toBeDefined();
    expect(element.textContent).toBe(tech);

    cleanup();
  });

  it("applies the correct styling classes", () => {
    const tech = "Vue";
    render(<ShinyTech tech={tech} />);

    const element = screen.getByText(tech);
    expect(element.className).toContain("bg-gradient-to-r");
    expect(element.className).toContain("from-primary");
    expect(element.className).toContain("to-accent");
    expect(element.className).toContain("bg-clip-text");
    expect(element.className).toContain("text-transparent");
    expect(element.className).toContain("font-normal");
    expect(element.className).toContain("w-fit");

    cleanup();
  });
});

describe("GithubButton", () => {
  it("renders with correct GitHub URL", () => {
    const projectName = "test-project";
    render(<GithubButton projectName={projectName} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/Gyskard/test-project",
    );

    cleanup();
  });

  it("renders button with correct content", () => {
    render(<GithubButton projectName="any-project" />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn", "btn-xs", "btn-soft", "mt-3");

    // Check for GitHub icon
    const icon = button.querySelector(".icon-\\[tabler--brand-github\\]");
    expect(icon).toBeDefined();
    expect(icon).toHaveClass("size-4");

    // Check button text
    expect(button).toHaveTextContent("Check on Github");

    cleanup();
  });
});
