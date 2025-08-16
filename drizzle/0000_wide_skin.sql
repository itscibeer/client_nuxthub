CREATE TABLE `users` (
	`id` text(32) PRIMARY KEY NOT NULL,
	`email` text(100) NOT NULL,
	`password` text(100) NOT NULL,
	`labels` text(100) DEFAULT 'Gamer' NOT NULL,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer DEFAULT null,
	`deleted_at` integer DEFAULT null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);