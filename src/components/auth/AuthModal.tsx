"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

interface AuthModalProps {
    open: boolean
    onClose: () => void
    defaultTab?: "signin" | "signup"
    onSuccess?: () => void;
}

export default function AuthModal({ open, onClose, defaultTab = "signin", onSuccess }: AuthModalProps) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold">
                        {defaultTab === "signin" ? "Sign In" : "Create Partner Account"}
                    </DialogTitle>
                </DialogHeader>
                <Tabs value={defaultTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="signin" disabled={defaultTab === "signup"}>Sign In</TabsTrigger>
                        <TabsTrigger value="signup" disabled={defaultTab === "signin"}>Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin" className="mt-0">
                        <LoginForm onSuccess={onClose} />
                    </TabsContent>
                    <TabsContent value="signup" className="mt-0">
                        <RegisterForm onSuccess={onClose} />
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    )
}