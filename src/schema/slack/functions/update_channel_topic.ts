/** This file was autogenerated on Tue Aug 30 2022. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineFunction } from "../../../functions/mod.ts";
import SchemaTypes from "../../schema_types.ts";
import SlackTypes from "../schema_types.ts";

export default DefineFunction(
  {
    callback_id: "slack#/functions/update_channel_topic",
    source_file: "",
    title: "Update channel topic",
    description:
      "Update the topic of a specific channel. This will work only if this workflow created the channel.",
    input_parameters: {
      required: ["channel_id", "topic"],
      properties: {
        channel_id: {
          type: SlackTypes.channel_id,
          description: "Search all channels",
        },
        topic: {
          type: SchemaTypes.string,
          description: "Enter a topic",
        },
      },
    },
    output_parameters: {
      required: ["topic"],
      properties: {
        topic: {
          type: SchemaTypes.string,
          description: "Channel topic",
        },
      },
    },
  },
);
