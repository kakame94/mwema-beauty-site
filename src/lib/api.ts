import { ChatResponse, Product, Service, SalonInfo } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function sendChatMessage(
  message: string,
  threadId: string | null
): Promise<ChatResponse> {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, thread_id: threadId }),
  });
  if (!res.ok) throw new Error("Chat request failed");
  return res.json();
}

export async function getProducts(category?: string): Promise<Product[]> {
  const url = category
    ? `${API_URL}/api/products?category=${category}`
    : `${API_URL}/api/products`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getServices(category?: string): Promise<Service[]> {
  const url = category
    ? `${API_URL}/api/services?category=${category}`
    : `${API_URL}/api/services`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

export async function getSalonInfo(): Promise<SalonInfo> {
  const res = await fetch(`${API_URL}/api/salon`);
  if (!res.ok) throw new Error("Failed to fetch salon info");
  return res.json();
}
