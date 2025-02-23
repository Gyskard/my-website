import { describe, it, expect, vi, beforeEach } from "vitest";
import { getBlobs } from "@/app/photos/actions";
import { list } from "@vercel/blob";

// Unit tests has been generated with IA (Claude 3.5 Sonnet).

// Mock the @vercel/blob module
vi.mock("@vercel/blob", () => ({
  list: vi.fn(),
}));

describe("photos/actions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getBlobs", () => {
    it("should call list with gallery/ prefix", async () => {
      // Mock the list function to return a sample response
      const mockResponse = {
        blobs: [
          {
            url: "https://example.com/gallery/image1.jpg",
            pathname: "gallery/image1.jpg",
          },
          {
            url: "https://example.com/gallery/image2.jpg",
            pathname: "gallery/image2.jpg",
          },
        ],
        cursor: undefined,
      };

      (list as any).mockResolvedValue(mockResponse);

      // Call the function
      const result = await getBlobs();

      // Verify list was called with correct parameters
      expect(list).toHaveBeenCalledWith({ prefix: "gallery/" });
      expect(list).toHaveBeenCalledTimes(1);

      // Verify the returned data matches the mock response
      expect(result).toEqual(mockResponse);
    });

    it("should handle empty response", async () => {
      // Mock empty response
      const mockEmptyResponse = {
        blobs: [],
        cursor: undefined,
      };

      (list as any).mockResolvedValue(mockEmptyResponse);

      // Call the function
      const result = await getBlobs();

      // Verify list was called
      expect(list).toHaveBeenCalledWith({ prefix: "gallery/" });

      // Verify empty response is handled correctly
      expect(result).toEqual(mockEmptyResponse);
      expect(result.blobs).toHaveLength(0);
    });

    it("should propagate errors", async () => {
      // Mock an error
      const mockError = new Error("Failed to fetch blobs");
      (list as any).mockRejectedValue(mockError);

      // Verify error is propagated
      await expect(getBlobs()).rejects.toThrow("Failed to fetch blobs");
      expect(list).toHaveBeenCalledWith({ prefix: "gallery/" });
    });
  });
});
