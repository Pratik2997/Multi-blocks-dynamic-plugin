/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from "@wordpress/components"
import { ServerSideRenderX } from '../blockb/components/server-side-render-x.js';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, isSelected }) {
	function updateName(value) {
		setAttributes({ name: value })
	}
	function updateAddress(value) {
		setAttributes({ address: value })
	}
	function updateURL(value) {
		setAttributes({ url: value })
	}
	return (
		<div {...useBlockProps()}>
			{__(
				<>
					{isSelected && (
						<>
							<h3>Block B</h3>
							<TextControl label="Name:" value={attributes.name} onChange={updateName} />
							<TextControl label="Address:" value={attributes.address} onChange={updateAddress} />
							<TextControl label="URL:" value={attributes.url} onChange={updateURL} />
						</>

					)}

					<ServerSideRenderX
						block="create-block/blockb"
						attributes={attributes}
						spinnerLocation={{ right: 0, top: 10, unit: 'px' }}
					/>
				</>
			)}
		</div>
	);
}
