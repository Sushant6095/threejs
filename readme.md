Racing 🚗
demo gif

site: threejs-psi-weld.vercel.app

Controls
Action	Button(s)
Move forward	w
Move backward	s / shift
Turn left	a
Turn right	d
Increase thrust	↑ / 🖱️ scroll up
Decrease thrust	↓ / 🖱️ scroll down
Reverse camera	r
Speedrun "Tech"
These are features, not bugs
Shortcuts
When passing through a checkpoint, the system only checks that it's index is greater than the vehicle's current checkpoint. This allows checkpoints to be skipped by jumping between segments of the track.

shortcut gif

Jumps
A delta time value is passed into the scene everytime its update() method is called. This dt value keeps increasing even the page is not being loaded or updated.

Tabbing between pages can cause the vehicle to "jump" because its displacement from its current position is equal to its velocity multiplied by dt.

jump gif
