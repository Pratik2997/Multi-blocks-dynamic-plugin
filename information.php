<?php

/**
 * Plugin Name:       Information
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       information
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

require_once plugin_dir_path(__FILE__) . 'inc/blockA_frontend.php';
require_once plugin_dir_path(__FILE__) . 'inc/blockB_frontend.php';


function create_block_information_block_init()
{
	register_block_type(__DIR__ . '/build/blocka', array(
		'render_callback' => 'renderCallbackBlockA'
	));
	register_block_type(__DIR__ . '/build/blockb', array(
		'render_callback' => 'renderCallbackBlockB'
	));
}
add_action('init', 'create_block_information_block_init');

function renderCallbackBlockA($attributes)
{
	if (!is_admin()) {
		return blockAFrontend($attributes);
	} else {
		return NULL;
	}
}

function renderCallbackBlockB($attributes)
{
	if (!is_admin()) {
		return blockBFrontend($attributes);
	} else {
		return NULL;
	}
}
