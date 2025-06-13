import dotenv from "dotenv";
dotenv.config();

import { Client }   from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

import express from "express";
import {McpToolCallRequest, McpToolCallResponse } from "./types/main"

const app = express();
const port = 3000;

app.listen(port, async () => {
    const mcpServerUrl = process.env.MCP_SERVER_URL;
    if (!mcpServerUrl) {
        throw new Error("MCP_SERVER_URL environment variable is required")
    }

    console.log(`🚀 MCP Client Test Server running on port: ${port}`)

    const client = await createClient(mcpServerUrl)

    console.info("\n🗒️ 使用可能なツールの一覧: ")
    console.log(await client.listTools())

    const request: McpToolCallRequest = {
        name: "reverse_text",
        arguments: {
            text: "こんにちは"
        }
    }

    const result = await client.callTool(request) as McpToolCallResponse
    console.info("\n✅️ 処理結果:")
    console.log(result)
})

async function createClient(url: string) {
  let client: Client|undefined = undefined
  const baseUrl = new URL(url);
  try {
    client = new Client({
      name: 'streamable-http-client',
      version: '1.0.0'
    });
    const transport = new StreamableHTTPClientTransport(
      new URL(baseUrl)
    );
    await client.connect(transport);
    console.log("Connected using Streamable HTTP transport");
  } catch (error) {
    // If that fails with a 4xx error, try the older SSE transport
    console.log("Streamable HTTP connection failed, falling back to SSE transport");
    client = new Client({
      name: 'sse-client',
      version: '1.0.0'
    });
    const sseTransport = new SSEClientTransport(baseUrl);
    await client.connect(sseTransport);
    console.log("Connected using SSE transport");
  }
  return client
}