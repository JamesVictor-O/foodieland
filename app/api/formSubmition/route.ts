export default function handler(req, res) {
    if (req.method === "post") {
        const { firstName, emailAddress, subject_Matter, message } = req.body;
        res.status(200).json({message})
    } else {
        res.setHeader("Allow", ['POST']);
        res.status(405).end(`method ${req.method} not allowed`)
    }
}