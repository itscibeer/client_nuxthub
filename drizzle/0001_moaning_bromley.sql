CREATE TABLE `centers` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer,
	`center_name` integer,
	`logo` integer,
	`cover` integer,
	`is_term_condition` integer DEFAULT 0,
	`is_active` integer DEFAULT 1,
	`description` integer,
	`gallery` integer DEFAULT 0,
	`currency` integer,
	`country_timezone` integer,
	`time_zone` integer,
	`time_format` text,
	`hand_over_mode` text,
	`deleted_reason` integer,
	`deleted_status` text,
	`created_at` integer DEFAULT 0 NOT NULL,
	`updated_at` integer DEFAULT 0,
	`deleted_at` integer DEFAULT 0,
	`is_vip_ads` integer DEFAULT 0,
	`main_video` integer,
	`left_image` integer,
	`bottom_image` integer,
	`public_id` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `centers_public_id_unique` ON `centers` (`public_id`);