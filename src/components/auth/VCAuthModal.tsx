"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VCLoginForm from "./VCLoginForm"
import VCRegisterForm from "./VCRegisterForm"

interface VCAuthModalProps {
  open: boolean
  onClose: () => void
  defaultTab?: "signin" | "signup"
  onSuccess?: () => void;
}

export default function VCAuthModal({ open, onClose, defaultTab = "signin", onSuccess }: VCAuthModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>
            {defaultTab === "signin" ? "VC Access Sign In" : "Create VC Account"}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="mt-4">
            <VCLoginForm onSuccess={onSuccess} />
          </TabsContent>

          <TabsContent value="signup" className="mt-4">
            <VCRegisterForm onSuccess={onSuccess} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
